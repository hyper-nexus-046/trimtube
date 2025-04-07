'use client'

import { useRouter } from 'next/navigation'

import { Dialog, DialogContent } from '~/components/ui/dialog'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  function onDismiss() {
    router.back()
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={onDismiss}>
      <DialogContent className='lg:max-w-[90%] xl:max-w-[75%] my-96 overflow-hidden p-0 [&>button.absolute]:border [&>button.absolute]:p-2'>
        {children}
      </DialogContent>
    </Dialog>
  )
}
