"use client";

import { courses } from "@/db/schema";
import { Card } from "./card";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1rf))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => console.log("h")}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
