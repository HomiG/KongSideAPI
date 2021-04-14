import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { KongServiceController } from './kong-service.controller';

@ApiHeader({
  name: 'X-MyHeader',
  description: 'Custom header',
})
describe('KongServiceController', () => {
  let controller: KongServiceController;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KongServiceController],
    }).compile();

    controller = module.get<KongServiceController>(KongServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
