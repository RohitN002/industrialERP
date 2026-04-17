import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';
import { QuoteRepository } from './entities/quote.entity';

@Module({
  controllers: [QuoteController],
  providers: [QuoteService, QuoteRepository],
  exports: [QuoteService, QuoteRepository],
})
export class QuoteModule {}
