import Header from "~/app/_components/common/header";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function HomePage() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <Link href="/photos/1">Open Modal</Link>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Trimtube</h1>
        <p className="text-lg">You are logged in as {JSON.stringify(user)}</p>
      </div>
    </main>
  );
}
