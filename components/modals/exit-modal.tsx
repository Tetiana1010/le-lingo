"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useExitModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
  const router = useRouter();
  const [client, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!client) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image
              src={"/mascot_sad.svg"}
              alt="Mascot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="text-bold text-center text-2xl">
            Wait, don&apos;t go
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;re about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant={"primary"}
              className="w-full"
              size="lg"
              onClick={close}
            >
              Keep learing
            </Button>
            <Button
              variant={"dangerOutline"}
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
