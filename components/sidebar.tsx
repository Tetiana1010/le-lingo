import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col bg-blue-500 lg:fixed lg:w-[256px] lg:border-r-2",
        className,
      )}
    >
      Sidebar
    </div>
  );
};
