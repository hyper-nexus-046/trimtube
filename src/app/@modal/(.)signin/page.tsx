import { LoginForm } from '~/components/common/login-form'

import { Modal } from './modal'

export default async function SignInModal() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  )
}
