import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
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

@Module({
  imports: [UserModule, AuthModule, UsersModule, RoleModule, OrganizationModule, EmployeeModule, LeadModule, SalesModule, PurchaseModule, ProductModule, ProductionModule, QualityModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
