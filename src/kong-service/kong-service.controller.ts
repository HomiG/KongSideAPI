import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateServiceDto } from './dto/create-service.dto';
import { KongServiceService } from './kong-service.service';

// @ApiHeader({
//   name: 'X-MyHeader',
//   description: 'Custom header',
// })
@Controller('kong-service')
export class KongServiceController {
  constructor(private readonly kongServiceService: KongServiceService) {}

  @ApiOperation({ summary: 'Retrieve Service\'s whose name is SQL-LIKE {name}' })
  @Get('/:name')
  async getServiceLike(@Param('name') name: string): Promise<any> {
    return this.kongServiceService.findNameLike(name);
  }

  @ApiResponse({
    status: 201,
    description: 'The Services have been successfully created.',
  })
  @ApiOperation({
    summary:
      "Create {N} Service just with one call, by defining the Service's name.",
  })
  @Post()
  @ApiBody({ type: CreateServiceDto })
  addDummyServices(@Body() createServiceDto: CreateServiceDto): Promise<any> {
    return this.kongServiceService.massPost(createServiceDto);

    // return `Name: ${createServiceDto.name}, host: ${createServiceDto.host}, port: ${createServiceDto.port}, path: ${createServiceDto.path}`;
  }
}
