import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 xl:flex-row">
      <div className="relative mb-8 h-[200px] w-[240px] lg:h-[424px] lg:w-[424px]">
        <Image src="/hero.svg" alt="Hero" width={400} height={400} />
      </div>
      <div className="flex w-full max-w-[340px] flex-col items-center gap-y-3">
        <h1 className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
          Learn, practice, and master new languages with Le Lingo.
        </h1>
        <div className="flex w-full max-w-[424px] flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader className="text-mited-foreground h-5 w-5 animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I alredy have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learing</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
