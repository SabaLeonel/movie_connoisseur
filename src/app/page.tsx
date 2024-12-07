import { HydrateClient } from "@/trpc/server";
import {Header} from "@/components/header";
import { auth } from "@/server/auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await auth();

  return (
    <HydrateClient>
	<Header/>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            My Movie <span className="text-[hsl(280,100%,70%)]">List</span>
          </h1>
		  <h1>{session?.user ? "Authentificated" + session?.user.email : "Not authentificated" }</h1>
        </div>
      </main>
    </HydrateClient>
  );
}