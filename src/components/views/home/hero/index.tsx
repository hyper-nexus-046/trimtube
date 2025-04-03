import { Input } from '~/components/ui/input'
import { TitledWrapper } from '~/components/wrappers'

export const Hero = () => {
  return (
    <TitledWrapper
      title='The Fast and Modern way to download YouTube videos.'
      para='Elevate your Youtube video editing with the speed and precision of Trimtube'
      sectionName='Hero'
      className='mb-content-lg pt-content flex flex-col items-center'
      headingLevel='h1'
      isMax
    >
      <div className='w-3/4 lg:w-2/4 xl:w-2/5 rounded-md p-1 bg-[length:400%_400%] animate-[gradient-x_7s_ease_infinite] bg-[linear-gradient(90deg,#db8b46_0%,#5230e8_30%,#db8b46_50%,#5230e8_70%,#db8b46_100%)]'>
        <Input
          placeholder='Enter your Youtube video link here or just copy and paste it'
          className='bg-black/60 px-4 py-5 sm:py-[26px] rounded-md text-xs border-none text-white'
        />
      </div>
    </TitledWrapper>
  )
}
