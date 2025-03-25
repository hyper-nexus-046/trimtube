import data from '~/content/json-files/faq.json'

import { Faq } from '~/components/common/faq'
import { Features } from '~/components/views/home/features'
import { Pricing } from '~/components/views/home/pricing'
import { PageWrapper } from '~/components/wrappers'

export default async function Page() {
  return (
    <PageWrapper>
      <Pricing headingLevel='h1' className='mt-content-sm' />
      <Features />
      <Faq data={data} />
    </PageWrapper>
  )
}
