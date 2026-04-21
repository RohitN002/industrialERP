import Navbar from "@/modules/components/shared/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-[#020617] border-r border-[#1E293B]">
        <Navbar />
      </div>
      <main className="flex-1 overflow-auto p-4 bg-[#020617]">{children}</main>
    </div>
  );
}
