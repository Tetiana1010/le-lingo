import { FeedWrapper } from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress?.activeCourseId) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <UserProgress
          activeCourse={{
            id: userProgress.activeCourseId,
            title: userProgress.courseTitle,
            imageSrc: userProgress.courseImageSrc,
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </FeedWrapper>
      <StickyWrapper>
        <Header title={userProgress.courseTitle} />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
