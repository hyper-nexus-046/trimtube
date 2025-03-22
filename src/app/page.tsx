import data from '~/content/json-files/faq.json'

import { Faq } from '~/components/common/faq'
import { Pricing } from '~/components/views/home/pricing'
import { Testimonials } from '~/components/views/home/testimonials'
import { PageWrapper } from '~/components/wrappers/page-wrapper'

export default async function HomePage() {
  return (
    <PageWrapper>
      <Faq data={data} />
      <Pricing />
      <Testimonials />
    </PageWrapper>
  )
}
