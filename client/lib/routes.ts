import { UserRole } from "@/shared/Enums/Role.enum"
import { AppRoute } from "@/shared/interface/interface"
import {
  LayoutDashboard,
  Package,
  Factory,
  Users,
  Settings,
  User,
  Target,
} from "lucide-react"

export const routes: AppRoute[] = [
  { 
    name: "Dashboard",
    path: "",
    icon: LayoutDashboard,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Product",
    path: "/product",
    icon: Package,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Production",
    path: "/production",
    icon: Factory,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Customer",
    path: "/customer",
    icon: Users,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Employee",
    path: "/employee",
    icon: User,
    roles: [UserRole.ADMIN],
  },
  {
    name: "Lead",
    path: "/lead",
    icon: Target,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Category",
    path: "/category",
    icon: Target,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Supplier",
    path: "/supplier",
    icon: Target,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    roles: [UserRole.ADMIN],
  },
]