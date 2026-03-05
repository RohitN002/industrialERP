import { LoginInput } from "@/modules/auth/auth.schema"

export const login = async (data: LoginInput) => {
    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return res.json()
}