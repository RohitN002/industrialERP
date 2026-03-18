import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    const token = req.cookies.get("token")?.value;
    const role = req.cookies.get("role")?.value;
    const pathname = req.nextUrl.pathname;
    if (!token && pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    if (token && pathname === "/login") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
}