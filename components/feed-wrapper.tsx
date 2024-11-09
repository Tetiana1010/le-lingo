type Props = {
  children: React.ReactNode;
};

export const FeedWrapper = ({ children }: Props) => {
  return (
    <div className="relative top-0 hidden flex-1 pb-10 lg:block">
      {children}
    </div>
  );
};
