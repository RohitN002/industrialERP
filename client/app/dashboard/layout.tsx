import Navbar from "@/modules/components/shared/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-74 bg-(--background) border-(--border)   p-4">
        <Navbar />
      </div>
      <main className="flex-1 overflow-auto p-4 bg-(--background)">
        {children}
      </main>
    </div>
  );
}
