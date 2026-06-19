import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { OrganizationRepository } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly organizationRepository: OrganizationRepository,
  ) {}
  async create(createOrganizationDto: CreateOrganizationDto, userId: string) {
    const newOrganization =
      await this.organizationRepository.createOrganization(
        createOrganizationDto,
        userId,
      );
    return { message: 'Organization created', data: newOrganization };
  }
  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const existingOrganization = await this.organizationRepository.findById(id);
    if (!existingOrganization) return { message: 'Organization not found' };
    const updatedOrganization = await this.organizationRepository.update(
      id,
      updateOrganizationDto,
    );
    return { message: 'Organization updated', data: updatedOrganization };
  }

  async findAllIndustries() {
    const industries = await this.organizationRepository.findAllIndustries();
    return { message: 'Industries fetched successfully', data: industries };
  }
  async findById(id: string) {
    const organization = await this.organizationRepository.findById(id);
    return { message: 'Organization fetched successfully', data: organization };
  }

  findOne(id: string) {
    return `This action returns a #${id} organization`;
  }

  remove(id: string) {
    return `This action removes a #${id} organization`;
  }
}
