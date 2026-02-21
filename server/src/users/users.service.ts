import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findByEmail(email: string) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) {
      return null;
    }
    return user;
  }

  async updateRefreshToken(userId: string, hash: string) {
    return this.userRepo.updateRefreshToken(userId, hash);
  }

  async findById(id: string) {
    const user = await this.userRepo.findById(id);
    if (!user) {
      return null;
    }
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }
  async register(user: CreateUserDto) {
    const existingUser = await this.userRepo.findByEmail(user.email);
    if (existingUser) {
      return 'email already exist ';
    }
    const newUser = await this.userRepo.create(user);
    return newUser;
  }
  async clearRefreshToken(id: string) {
    return this.userRepo.clearRefreshToken(id);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
