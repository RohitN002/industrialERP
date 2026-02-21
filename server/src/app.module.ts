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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
