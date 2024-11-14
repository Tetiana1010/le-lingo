import React from "react";

type Props = {
  children: React.ReactNode;
};

const lessonLayout = ({ children }: Props) => {
  return (
    <div className="flx-col flex h-full">
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  );
};

export default lessonLayout;
