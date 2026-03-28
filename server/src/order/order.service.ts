import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepo: OrderRepository) {}
  async create(createOrderDto: CreateOrderDto) {
    const existingOrder = await this.orderRepo.findOne(
      createOrderDto.orderNumber,
    );
    if (existingOrder) {
      throw new Error('Order already exists ');
    }
    const order = this.orderRepo.create(createOrderDto);
    return {
      message: 'Order created Sucessfully',
      data: order,
    };
  }

  async findAll() {
    const data = await this.orderRepo.findAll();

    return {
      message: 'Order fetched Sucessfully',
      data: data,
    };
  }

  async findOne(id: string) {
    const data = await this.orderRepo.findOne(id);
    if (!data) {
      throw new Error('No Order Found');
    }
    return {
      message: 'Order fetched Sucessfully',
      data: data,
    };
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const existingOrder = await this.orderRepo.findOne(id);
    if (!existingOrder) {
      throw new Error('No Order Found');
    }
    const order = await this.orderRepo.update(id, updateOrderDto);
    return {
      message: 'Order updated Sucessfully',
      data: order,
    };
  }

  async remove(id: string) {
    const existingOrder = await this.orderRepo.findOne(id);
    if (!existingOrder) {
      throw new Error('No Order Found');
    }
    const order = await this.orderRepo.remove(id);
    return {
      message: 'Order deleted Sucessfully',
      data: order,
    };
  }
}
