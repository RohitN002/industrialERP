import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuoteRepository } from './entities/quote.entity';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}
  async create(createQuoteDto: CreateQuoteDto, clientId: string) {
    const createdQuote = await this.quoteRepository.createQuote(
      createQuoteDto,
      clientId,
    );
    return { message: 'quote created sucessfully', data: createdQuote };
  }

  async findByClientId(clientId: string) {
    const quotes = await this.quoteRepository.findByClientId(clientId);
    if (quotes.length === 0) {
      //  return ('No quotes found');
    }
    return { message: 'quotes Details fetched sucessfully', data: quotes };
  }

  async findOne(id: string) {
    console.log('id', id);
    const quote = await this.quoteRepository.findOne(id);
    if (!quote) {
      //  return ('No quote found');
    }
    return { message: 'quote Detail fetched sucessfully', data: quote };
  }

  async update(id: string, updateQuoteDto: UpdateQuoteDto) {
    const validQuote = await this.quoteRepository.findOne(id);
    console.log('validQuote', validQuote);
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
