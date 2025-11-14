// app/page.tsx
import React from "react";
import Hero from "./components/Hero.module.css"; // Make sure this matches your folder structure
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* HERO SECTION */}
      

      {/* ORIGINAL PAGE CONTENT */}
      <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 dark:bg-black py-16 px-8 w-full max-w-3xl mx-auto">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center mt-8 sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning center
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}




