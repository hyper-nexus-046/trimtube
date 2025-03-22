import data from '~/content/json-files/faq.json'

import { Faq } from '~/components/common/faq'
import { Header } from '~/components/common/header'
import { FeatureGrid } from '~/components/views/home/feature-grid'
import { Pricing } from '~/components/views/home/pricing'
import { Testimonials } from '~/components/views/home/testimonials'
import { PageWrapper } from '~/components/wrappers/page-wrapper'

export default async function HomePage() {
  return (
    <PageWrapper>
      <Header />
      <Faq data={data} />
      <FeatureGrid />
      <Pricing />
      <Testimonials />
    </PageWrapper>
  )
}
