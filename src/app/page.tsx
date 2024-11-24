import { Button } from "@/components/ui/button";
import Link from "next/link";
import { doto } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full gap-8 flex-col">
      <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${doto.className} antialiased`}>
        Expense Tracker
      </h1>

      <Link href="/dashboard">
        <Button variant="default">Go to dashboard</Button>
      </Link>
    </main>
  );
}
