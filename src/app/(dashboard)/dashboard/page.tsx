import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar'
import { SiteHeader } from '~/components/dashboard/common/site-header'
import { HomeContent } from '~/components/dashboard/home'
import { AppSidebar } from '~/components/dashboard/sidebar/app-sidebar'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col'>
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
