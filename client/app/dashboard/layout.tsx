import Navbar from '@/modules/components/shared/NavBar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
  <div className="flex h-screen">
      {/* Left Sidebar */}
      <Navbar />

      {/* Right Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}