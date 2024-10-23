import MobileNav from '@/components/MobileNav'
import Sidebar from '@/components/Sidebar'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
      <Sidebar />
      <MobileNav />

      <div className="mt-16 flex-1 overflow-auto py-8 md:mt-0 lg:max-h-screen lg:pt-4">
        <div className="ml-12 md:ml-72">
          {children}
        </div>
      </div>

      <Toaster />
    </main>
  )
}

export default Layout