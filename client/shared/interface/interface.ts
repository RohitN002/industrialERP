import { UserRole } from "@/shared/Enums/Role.enum"
import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

export interface AppRoute {
  name: string
  path: string
  roles:any
  icon?:LucideIcon
  children?: AppRoute[]
}