import { Theming } from '~/components/views/theming'
import { Wrapper } from '~/components/wrappers'

export default async function Page() {
  return (
    <Wrapper className='p-content-sm'>
      <Theming />
    </Wrapper>
  )
}
