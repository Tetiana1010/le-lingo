import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { boolean } from "drizzle-orm/mysql-core";

type Props = {
  id: number;
  text: string;
  imageSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status?: "correct" | "wrong" | "none";
  audioSrc: string | null;
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
};

export const Card = ({
  id,
  text,
  imageSrc,
  shortcut,
  selected,
  onClick,
  status,
  audioSrc,
  disabled,
  type,
}: Props) => {
  return (
    <div
      className={cn(
        "h-full cursor-pointer rounded-xl border-2 border-b-4 p-4 hover:bg-black/5 active:border-b-2 lg:p-6",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected &&
          status === "correct" &&
          "hover:green-100 border-green-300 bg-green-100",
        selected &&
          status === "wrong" &&
          "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "",
      )}
      onClick={() => {}}
    >
      Card
    </div>
  );
};
