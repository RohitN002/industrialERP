import { UserRole } from "@/shared/Enums/Role.enum"

export interface AppRoute {
  name: string
  path: string
  roles: UserRole[]
}

export const routes: AppRoute[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Product",
    path: "/product",
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Production",
    path: "/production",
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Customer",
    path: "/customer",
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Employee",
    path: "/employee",
    roles: [UserRole.ADMIN],
  },
  {
    name: "Lead",
    path: "/lead",
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Settings",
    path: "/settings",
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
]