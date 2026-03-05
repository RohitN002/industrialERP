import { Module } from '@nestjs/common';
import { QualityService } from './quality.service';
import { QualityController } from './quality.controller';
import { QualityRepository } from './entities/quality.entity';

@Module({
  controllers: [QualityController],
  providers: [QualityService, QualityRepository],
})
export class QualityModule {}
