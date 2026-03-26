import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(private readonly RoleRepo: RoleRepository) {}
  async create(createRoleDto: CreateRoleDto) {
    const exisitingRole = await this.RoleRepo.find(createRoleDto.name);
    if (exisitingRole) {
      throw new Error('Role already exists');
    }
    const role = await this.RoleRepo.create(createRoleDto);
    return { message: 'Role created sucessfully', data: role };
  }

  async findAll() {
    const roles = await this.RoleRepo.findAll();
    if (!roles) {
      throw new Error('Roles not found');
    }
    return { message: 'Roles fetched sucessfully', data: roles };
  }

  async findOne(id: string) {
    const role = await this.RoleRepo.findOne(id);
    if (!role) {
      throw new Error('Role not found');
    }
    return { message: 'Role fetched sucessfully', data: role };
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const existingRole = await this.RoleRepo.findOne(id);
    if (!existingRole) {
      throw new Error('Role not found');
    }
    const role = await this.RoleRepo.update(id, updateRoleDto);
    return { message: 'Role updated sucessfully', data: role };
  }

  async remove(id: string) {
    const existingRole = await this.RoleRepo.findOne(id);
    if (!existingRole) {
      throw new Error('Role not found');
    }
    const role = await this.RoleRepo.remove(id);
    return { message: 'Role deleted sucessfully', data: role };
  }
}
