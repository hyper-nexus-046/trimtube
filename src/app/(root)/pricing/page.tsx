import data from '~/content/json-files/faq.json'

import { Faq } from '~/components/common/faq'
import { Features } from '~/components/views/home/features'
import { Pricing } from '~/components/views/home/pricing'
import { PageWrapper } from '~/components/wrappers'

export default async function Page() {
  return (
    <PageWrapper className='p-content mb-content-lg'>
      <Pricing headingLevel='h1' />
      <Features />
      <Faq data={data} />
    </PageWrapper>
  )
}
