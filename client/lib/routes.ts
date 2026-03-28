import { UserRole } from "@/shared/Enums/Role.enum";
import { AppRoute } from "@/shared/interface/interface";
import {
  LayoutDashboard,
  Package,
  Factory,
  Users,
  Settings,
  User,
  Target,
} from "lucide-react";

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
    name: "Order",
    path: "/order",
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
    name: "Client Management",
    path: "/client",
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
    name: "Category",
    path: "/category",
    icon: Target,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Designation",
    path: "/designation",
    icon: Target,
    roles: [UserRole.ADMIN, UserRole.EMPLOYEE],
  },
  {
    name: "Role",
    path: "/role",
    icon: Target,
    roles: [UserRole.ADMIN],
  },
  {
    name: "Department",
    path: "/department",
    icon: Target,
    roles: [UserRole.ADMIN],
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
];
