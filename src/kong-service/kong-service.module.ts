import { HttpModule, Module } from '@nestjs/common';

import { KongServiceController } from './kong-service.controller';
import { KongServiceService } from './kong-service.service';

@Module({
  imports: [HttpModule],
  controllers: [KongServiceController],
  providers: [KongServiceService],
})
export class KongModule {}
