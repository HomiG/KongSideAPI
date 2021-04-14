import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KongServiceController } from './kong-service/kong-service.controller';
import { KongModule } from './kong-service/kong-service.module';
import { KongServiceService } from './kong-service/kong-service.service';

@Module({
  imports: [HttpModule, KongModule],
  controllers: [AppController, KongServiceController],
  providers: [AppService, KongServiceService],
})
export class AppModule {}
