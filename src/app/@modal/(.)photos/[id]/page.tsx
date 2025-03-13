import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return (
    <Modal>
      <div className="flex min-h-[200px] min-w-[200px] flex-col items-center justify-center bg-white">
        <h1>Photo {photoId}</h1>
      </div>
    </Modal>
  );
}
