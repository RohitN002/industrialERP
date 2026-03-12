import Navbar from "@/modules/components/shared/NavBar";
import { UserRole } from "@/shared/Enums/Role.enum";

export default function DashboardPage() {
    return (
        <div>
            <h1>    Dashboard</h1>
            <p>Welcome to the dashboard</p>
            <Navbar />
        </div>
    );
}