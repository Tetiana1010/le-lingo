type Props = {
  children: React.ReactNode;
};

const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="sticky bottom-6 w-full self-end lg:block lg:w-[368px]">
      <div className="top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
