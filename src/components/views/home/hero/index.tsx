import { TitledWrapper } from '~/components/wrappers'

import { HeroInput } from './hero-input'

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
      <HeroInput />
    </TitledWrapper>
  )
}
