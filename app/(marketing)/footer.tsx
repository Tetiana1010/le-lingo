import { Button } from "@/components/ui/button";
import Image from "next/image";

const languages = [
  {
    id: "1",
    language: "Croatian",
    flag: "hr",
  },
  {
    id: "2",
    language: "Spanish",
    flag: "es",
  },
  {
    id: "3",
    language: "Italian",
    flag: "it",
  },
  {
    id: "4",
    language: "Japanese",
    flag: "jp",
  },
  {
    id: "5",
    language: "French",
    flag: "fr",
  },
];

export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        {languages.map((language) => (
          <Button
            key={language.id}
            size="lg"
            variant="ghost"
            className="w-full"
          >
            <Image
              src={`/${language.flag}.svg`}
              alt={language.language}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {language.language}
          </Button>
        ))}
      </div>
    </footer>
  );
};
