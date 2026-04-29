"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { UserRole } from "@/shared/Enums/Role.enum";
import { routes } from "@/lib/routes";
import { useAuthStore } from "@/lib/store/auth.store";
import { useMemo } from "react";
import { LogOut } from "lucide-react";
import { ThemeController } from "../theme/ThemeController";

export default function Navbar() {
  const role = useAuthStore((state) => state.role);
  const pathname = usePathname();

  const roleSet = useMemo(() => new Set(role), [role]);
  const allowedRoutes = useMemo(() => {
    return routes.filter((route) =>
      route.roles.some((r: any) => roleSet.has(r)),
    );
  }, [roleSet]);
  const router = useRouter();

  return (
    <nav className=" border-(--border) h-screen p-4 bg-(--surface) overflow-auto">
      <ul className="space-y-2">
        <ThemeController />
        {allowedRoutes.map((route) => {
          const Icon = route.icon;
          const active = pathname.startsWith(route.path);
          return (
            <li key={route.path} className="p-2">
              <Link
                href={route.path ? `/dashboard/${route.path}` : "/dashboard"}
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  active
                    ? "bg-(--primary) text-white"
                    : "hover:bg-(--surfaceHover) text-(--text-secondary)"
                }`}
              >
                {Icon && <Icon size={18} />}
                {route.name}
              </Link>
            </li>
          );
        })}

        <button
          onClick={() => {
            useAuthStore.getState().logout();
            router.push("/login");
          }}
          className="flex items-center gap-3 p-2 rounded-md  w-full text-(--text-secondary)"
        >
          <LogOut size={18} />
          Logout
        </button>
      </ul>
    </nav>
  );
}
