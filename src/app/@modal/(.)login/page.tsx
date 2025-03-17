import { LoginForm } from "~/components/common/login-form";
import { Modal } from "./modal";

export default async function PhotoModal() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}
