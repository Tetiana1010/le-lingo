import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  variant: "points" | "hearts";
  value: number;
};
export const ResultCard = ({ variant, value }: Props) => {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

  return (
    <div
      className={cn(
        "w-full rounded-2xl border-2",
        variant === "points" && "border-orange-400 bg-orange-400",
        variant === "hearts" && "border-rose-400 bg-rose-400",
      )}
    >
      <div
        className={cn(
          "text-sx rounded-t-xl p-1.5 text-center font-bold uppercase text-white",
          variant === "hearts" && "bg-rose-500",
          variant === "points" && "bg-orange-500",
        )}
      >
        {variant === "hearts" ? "Hearts Left" : "Total PX"}
      </div>
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-white p-6 text-lg font-bold",
          variant === "hearts" && "text-rose-400",
          variant === "points" && "text-orange-400",
        )}
      >
        <Image
          src={imageSrc}
          alt="Icon"
          height={30}
          width={30}
          className="mr-1.5"
        />
        {value}
      </div>
    </div>
  );
};
