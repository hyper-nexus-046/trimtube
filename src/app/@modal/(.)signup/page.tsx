import { LoginForm } from '~/components/common/login-form'

import { Modal } from './modal'

export default async function SignUpModal() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  )
}
