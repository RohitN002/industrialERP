import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { OrganizationModule } from './organization/organization.module';
import { EmployeeModule } from './employee/employee.module';
import { LeadModule } from './lead/lead.module';
import { SalesModule } from './sales/sales.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ProductModule } from './product/product.module';
import { ProductionModule } from './production/production.module';
import { QualityModule } from './quality/quality.module';
import { CustomerModule } from './customer/customer.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DesignationModule } from './designation/designation.module';
import { DepartmentModule } from './department/department.module';
import { CategoryModule } from './category/category.module';
import { SupplierModule } from './supplier/supplier.module';
import { OrderModule } from './order/order.module';
import { PayrollModule } from './payroll/payroll.module';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PrismaModule,
    AuthModule,
    UsersModule,
    RoleModule,
    OrganizationModule,
    EmployeeModule,
    LeadModule,
    SalesModule,
    PurchaseModule,
    ProductModule,
    ProductionModule,
    QualityModule,
    CustomerModule,
    AttendanceModule,
    DesignationModule,
    DepartmentModule,
    CategoryModule,
    SupplierModule,
    OrderModule,
    PayrollModule,
    QuoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
