import data from '~/content/json-files/faq.json'

import { Faq } from '~/components/common/faq'
import { FeatureGrid } from '~/components/common/feature-grid'
import { Features } from '~/components/views/home/features'
import { Hero } from '~/components/views/home/hero'
import { Pricing } from '~/components/views/home/pricing'
import { Testimonials } from '~/components/views/home/testimonials'
import { Working } from '~/components/views/home/working'
import { PageWrapper } from '~/components/wrappers/page-wrapper'

export default async function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Working />
      <Features />
      <Faq data={data} />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
    </PageWrapper>
  )
}
