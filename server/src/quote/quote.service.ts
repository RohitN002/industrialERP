import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuoteRepository } from './entities/quote.entity';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}
  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
  }

  async findAll() {
    const quotes = await this.quoteRepository.findAll();
    if (quotes.length === 0) {
      //  return ('No quotes found');
    }
    return { message: 'quotes Details fetched sucessfully', data: quotes };
  }

  async findOne(id: string) {
    const quote = await this.quoteRepository.findOne(id);
    if (!quote) {
      //  return ('No quote found');
    }
    return { message: 'quote Detail fetched sucessfully', data: quote };
  }

  async update(id: string, updateQuoteDto: UpdateQuoteDto) {
    const validQuote = await this.quoteRepository.findOne(id);
    if (!validQuote) {
      throw new Error('Invalid quoteId');
    }
    const updatedQuote = await this.quoteRepository.updateQuote(
      id,
      updateQuoteDto,
    );
    return { message: 'quote updated sucessfully', data: updatedQuote };
  }

  async remove(id: string) {
    const validQuote = await this.quoteRepository.findOne(id);
    if (!validQuote) {
      throw new Error('Invalid quoteId');
    }
    const deletedQuote = await this.quoteRepository.removeQuote(id);
    return { message: 'quote deleted sucessfully', data: deletedQuote };
  }
}
