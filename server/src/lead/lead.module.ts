import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { LeadRepository } from './entities/lead.entity';

@Module({
  controllers: [LeadController],
  providers: [LeadService, LeadRepository],
})
export class LeadModule { }
