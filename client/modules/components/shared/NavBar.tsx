"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { UserRole } from "@/shared/Enums/Role.enum"
import { routes } from "@/lib/routes"
import { useAuthStore } from "@/lib/store/auth.store"



export default function Navbar() {
  const role = useAuthStore((state) => state.role)
  const pathname = usePathname()
console.log("role",role)
console.log("routes value",routes.map((r) => r.roles))
 const allowedRoutes = routes.filter((route) =>
  role?.some((r) => route.roles.includes(r))
);
console.log("allowedRoutes",allowedRoutes)
  return (
    <nav className="w-64 border-r h-screen p-4">
      <ul className="space-y-2">
        {allowedRoutes.map((route) => {
          const Icon = route.icon
          const active = pathname.startsWith(route.path)

          return (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`flex items-center gap-3 p-2 rounded-md ${
                  active ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
              >
                {Icon && <Icon size={18} />}
                {route.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}