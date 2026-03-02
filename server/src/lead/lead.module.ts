import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { Lead } from './entities/lead.entity';

@Module({
  controllers: [LeadController],
  providers: [LeadService, Lead],
})
export class LeadModule { }
