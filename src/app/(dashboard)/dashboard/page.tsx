import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar'
import { HomeContent } from '~/components/dashboard/home-content'
import { SiteHeader } from '~/components/dashboard/site-header'
import { AppSidebar } from '~/components/sidebar/app-sidebar'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='h-screen overflow-hidden'>
        <SiteHeader />
        <div className='flex flex-1 flex-col overflow-auto'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 md:gap-6 p-4 lg:p-6'>
              <HomeContent />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
