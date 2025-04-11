import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'
import { Pricing } from '~/components/views/home/pricing'
import { Wrapper } from '~/components/wrappers'

export const PricingModal = () => {
  return (
    <Wrapper className='py-content'>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className='max-w-[1200px]'>
          <DialogHeader>
            <DialogTitle className='sr-only'>Pricing modal</DialogTitle>
          </DialogHeader>
          <Pricing />
        </DialogContent>
      </Dialog>
    </Wrapper>
  )
}
