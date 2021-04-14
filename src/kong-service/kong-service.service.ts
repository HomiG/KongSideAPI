import { HttpService, Injectable } from '@nestjs/common';
import { response } from 'express';
import { Observable } from 'rxjs';
import { KongService } from './dto/interfaces/kong-service.interface';
import { map } from 'rxjs/operators';
import { CreateServiceDto } from './dto/create-service.dto';
import { pathToFileURL } from 'node:url';
import { prototype } from 'node:events';
import { POINT_CONVERSION_COMPRESSED } from 'node:constants';
import responsiveObserve from 'antd/lib/_util/responsiveObserve';

@Injectable()
export class KongServiceService {
  constructor(private httpService: HttpService) {}

  //Match patern given in request, and return the Kong's Services which name is (SQL-like)
  async findNameLike(name: string): Promise<any> {
    const response = await this.httpService
      .get('http://localhost:8001/services')
      .toPromise();

    const responseNameService = response.data.data.filter((key) =>
      key['name'].match(`${name}`),
    );

    return responseNameService;
  }

  async massPost(createServiceDto: CreateServiceDto): Promise<any> {
    // separate the name array from the body to iterate over it, in order to create multiple services.
    const { name, ...KongServiceDto } = createServiceDto;

    async function postService(
      newServiceName: string,
      httpService: HttpService,
    ) {
      const response = await httpService
        .post('http://localhost:8001/services', {
          name: newServiceName,
          ...KongServiceDto,
        })
        .toPromise()
        .catch((error) => error.response);
      return response.data;
    }

    async function allPost(httpService: HttpService) {
      let responses = [];
      for (let i = 0; i < createServiceDto.name.length; i++) {
        responses.push(
          await postService(createServiceDto.name[i], httpService),
        );
      }
      return responses;
    }

    const responses = await allPost(this.httpService);

    
    
    return responses;
  }
}
