import { Test, TestingModule } from '@nestjs/testing';
import { KongServiceService } from './kong-service.service';

describe('KongServiceService', () => {
  let service: KongServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KongServiceService],
    }).compile();

    service = module.get<KongServiceService>(KongServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
