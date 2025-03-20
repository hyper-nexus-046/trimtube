import data from '~/content/json-files/faq.json'

import { Faq } from '~/components/common/faq'
import { PageWrapper } from '~/components/wrappers/page-wrapper'

export default async function HomePage() {
  return (
    <PageWrapper>
      <Faq data={data} />
    </PageWrapper>
  )
}
