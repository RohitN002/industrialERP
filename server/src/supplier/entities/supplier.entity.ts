import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateSupplierDto } from "../dto/create-supplier.dto";
import { RoleType } from "@prisma/client";
import * as bcrypt from "bcrypt";

@Injectable()
export class SupplierRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createSupplier(dto: CreateSupplierDto) {
       const password = 'supplier@123';
        const hashedPassword = await bcrypt.hash(password, 10);
      
        const supplierRole = await this.prisma.role.findUnique({
           where: { name: RoleType.SUPPLIER },
         });
       
         if (!supplierRole) {
           throw new Error('SUPPLIER role not found');
         }
       const existing = await this.prisma.user.findUnique({
         where: { email: dto.email },
       });
       
       if (existing) {
         throw new Error('Email already exists');
       }
         // 2. Create Supplier + User + Role mapping
         const supplier = await this.prisma.supplier.create({
           data: {
             phone: dto.phone || '',
             address: dto.address || '',
             city: dto.city,
             state: dto.state,
             country: dto.country,
             pincode: dto.pincode,
             contactPerson: dto.contactPerson,
             contactPersonPhone: dto.contactPersonPhone || '',
             gst: dto.gst || '',
       
             user: {
               create: {
                 email: dto.email,
                 name: dto.name,
                 passwordHash: hashedPassword,
       
                 roles: {
                   create: [
                     {
                       role: {
                         connect: { id: supplierRole.id },
                       },
                     },
                   ],
                 },
               },
             },
           },
           include: {
             user: {
               include: {
                 roles: {
                   include: {
                     role: true,
                   },
                 },
               },
             },
           },
         });
         return supplier
    }

   async findAllSuppliers() {
  const suppliers= await this.prisma.supplier.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
   return suppliers.map((s:any) => ({
    id: s.id,
    phone: s.phone,
    address: s.address,
    city: s.city,
    state: s.state,
    country: s.country,
    pincode: s.pincode,
    contactPerson: s.contactPerson,
    contactPersonPhone: s.contactPersonPhone,
    gst: s.gst,

    // ✅ flatten user fields
    name: s.user.name,
    email: s.user.email,
  }));
}

    async findSupplierById(id: string) {
  const s = await this.prisma.supplier.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  if (!s) return null;

  return {
    id: s.id,
    phone: s.phone,
    address: s.address,
    city: s.city,
    state: s.state,
    country: s.country,
    pincode: s.pincode,
    contactPerson: s.contactPerson,
    contactPersonPhone: s.contactPersonPhone,
    gst: s.gst,

 
    name: s.user.name,
    email: s.user.email,
  };
}

async updateSupplier(
  id: string,
  dto: {
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    contactPerson?: string;
    contactPersonPhone?: string;
    gst?: string;
    name?: string;   // User field
    email?: string;  // User field
  },
) {
  // 1. Update supplier + optional user fields
  const updatedSupplier = await this.prisma.supplier.update({
    where: { id },
    data: {
      // Supplier fields
      ...(dto.phone && { phone: dto.phone }),
      ...(dto.address && { address: dto.address }),
      ...(dto.city && { city: dto.city }),
      ...(dto.state && { state: dto.state }),
      ...(dto.country && { country: dto.country }),
      ...(dto.pincode && { pincode: dto.pincode }),
      ...(dto.contactPerson && { contactPerson: dto.contactPerson }),
      ...(dto.contactPersonPhone && { contactPersonPhone: dto.contactPersonPhone }),
      ...(dto.gst && { gst: dto.gst }),

      // Nested User update
      user: {
        update: {
          ...(dto.name && { name: dto.name }),
          ...(dto.email && { email: dto.email }),
        },
      },
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  // 2. Flatten user fields for clean response
  return {
    id: updatedSupplier.id,
    phone: updatedSupplier.phone,
    address: updatedSupplier.address,
    city: updatedSupplier.city,
    state: updatedSupplier.state,
    country: updatedSupplier.country,
    pincode: updatedSupplier.pincode,
    contactPerson: updatedSupplier.contactPerson,
    contactPersonPhone: updatedSupplier.contactPersonPhone,
    gst: updatedSupplier.gst,
    name: updatedSupplier.user.name,
    email: updatedSupplier.user.email,
  };
}

 async deleteSupplier(id: string) {
    try {
      // Use a transaction to delete both supplier and user
      const deleted = await this.prisma.$transaction(async (tx) => {
        // 1️⃣ Find supplier to get userId
        const supplier = await tx.supplier.findUnique({
          where: { id },
          select: { userId: true },
        });

        if (!supplier) {
          throw new NotFoundException(`Supplier with id ${id} not found`);
        }

        // 2️⃣ Delete supplier
        await tx.supplier.delete({
          where: { id },
        });

        // 3️⃣ Delete associated user
        await tx.user.delete({
          where: { id: supplier.userId },
        });

        return { message: 'Supplier and associated user deleted successfully', id };
      });

      return deleted;
    } catch (e) {
      // Prisma P2025 errors already handled via findUnique check
      throw e;
    }
  }
}
