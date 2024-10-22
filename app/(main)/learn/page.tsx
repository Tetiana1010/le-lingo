import { FeedWrapper } from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

export default function Home() {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <UserProgress
          activeCourse={{
            title: "Spanish",
            imageSrc: "/es.svg",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </FeedWrapper>
      <StickyWrapper>
        <Header title="Spanish" />
      </StickyWrapper>
    </div>
  );
}
