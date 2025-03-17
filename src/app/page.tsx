import Header from "~/components/common/header";
import { currentUser } from "@clerk/nextjs/server";
import { TitledWrapper } from "~/components/wrappers";
import { Activity } from "lucide-react";

export default async function HomePage() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <TitledWrapper
        sectionIcon={<Activity size={16} />}
        sectionName="Trimtube - AI Powered Youtube Editor"
        title="The Fast and Modern way to cut & download YouTube videos."
        para="Elevate your Youtube video editing with the speed and precision of SliceTube"
      >
        <div className="flex flex-col items-center justify-center">
          {user && (
            <p className="text-lg">You are logged in as {user?.fullName}</p>
          )}
        </div>
      </TitledWrapper>
    </main>
  );
}
