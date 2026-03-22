import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class categoryRepository {
    constructor(private readonly prisma :PrismaService){}

    async createCategory(name: string) {
        return this.prisma.category.create({ data: { name } });
    }
    async findCategoryByName (name:string){
        return this.prisma.category.findUnique({where:{name}})
    }
    async findAllCategories() {
        return this.prisma.category.findMany();
    }
    async findCategoryById(id: string) {
        return this.prisma.category.findUnique({ where: { id } });
    }
    async updateCategory(id: string, name: string) {
        return this.prisma.category.update({ where: { id }, data: { name } });
    }
    async deleteCategory(id: string) {
        return this.prisma.category.delete({ where: { id } });
    }
}
