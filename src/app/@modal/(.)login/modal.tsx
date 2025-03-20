'use client'

import { useRouter } from 'next/navigation'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '~/components/ui/dialog'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  function onDismiss() {
    router.back()
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={onDismiss}>
      <DialogContent className='max-w-[75%] bg-red-500 p-5'>
        <DialogHeader className='space-y-2'>
          <DialogTitle className='sr-only text-heading-h7 font-bold'>
            Login
          </DialogTitle>
          <DialogDescription className='sr-only text-sm text-secondary-foreground'>
            asdfasdf
          </DialogDescription>
        </DialogHeader>

        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col gap-4 p-6 md:p-10'>
            <div className='flex flex-1 items-center justify-center'>
              <div className='w-full max-w-xs'>{children}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
