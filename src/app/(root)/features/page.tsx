import { DollarSign, Download, Timer, VolumeX } from 'lucide-react'

import { FeatureGrid } from '~/components/common/feature-grid'
import { PageWrapper, Wrapper } from '~/components/wrappers'

export default function Features() {
  return (
    <PageWrapper showCta={false}>
      <Wrapper>
        <FeatureGrid
          title='Used by hundreds of creators'
          para='From YouTube professionals to students, SliceTube serves everyone.'
          sectionName='Creators'
          isMax
          features={[
            {
              icon: Download,
              title: '4k videos',
              description:
                'SliceTube lets you download videos up to 4k resolution unlike other downloaders.'
            },
            {
              icon: Timer,
              title: 'Blazingly fast',
              description:
                'We run powerful servers that are insanely fast with slicing, cutting, and downloads.'
            },
            {
              icon: DollarSign,
              title: 'Flexible Pricing',
              description:
                'Get an annual license and save up to 4 months. What a deal!'
            },
            {
              icon: VolumeX,
              title: 'No ads. Period.',
              description:
                'We hate ads as much as you do. No more sketchy websites. Just a powerful tool to cut and download videos.'
            }
          ]}
          className='grid gap-6 pt-content-sm sm:grid-cols-2 xl:grid-cols-4'
        />
      </Wrapper>
    </PageWrapper>
  )
}
