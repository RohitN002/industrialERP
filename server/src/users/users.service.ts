import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
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
  async hash(password: string): Promise<string> {
    const saltRounds = 12;
    return bcrypt.hash(password, saltRounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
  async register(user: CreateUserDto) {
    const { password, roles = [], ...rest } = user;

    // 1️⃣ Check if user already exists
    const existingUser = await this.userRepo.findByEmail(rest.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // 2️⃣ Hash password
    const passwordHash = await this.hash(password);

    // 3️⃣ Create user and connect roles sodfjo
    const newUser = await this.userRepo.create({
      ...rest,
      passwordHash,
      roles: {
        create: roles.map((roleName) => ({
          role: {
            connect: { name: roleName }, // must exist in Role table
          },
        })),
      },
    });

    // 4️⃣ Remove passwordHash before returning
    const { passwordHash: _, ...safeUser } = newUser;

    return safeUser;
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
