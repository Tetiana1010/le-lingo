import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const navigationLinks = [
  {
    id: 1,
    label: "Learn",
    iconSrc: "/learn.svg",
    href: "/learn",
  },
  {
    id: 2,
    label: "Leaderboard",
    iconSrc: "/leaderboard.svg",
    href: "/leaderboard",
  },
  {
    id: 3,
    label: "Quests",
    iconSrc: "/quests.svg",
    href: "/quests",
  },
  {
    id: 4,
    label: "Shop",
    iconSrc: "/shop.svg",
    href: "/shop",
  },
];

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col pl-4 lg:fixed lg:w-[256px] lg:border-r-2",
        className,
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pt-8">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Le Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        {navigationLinks.map((link) => (
          <SidebarItem
            key={link.id}
            label={link.label}
            iconSrc={link.iconSrc}
            href={link.href}
          />
        ))}
      </div>
      <div>
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
