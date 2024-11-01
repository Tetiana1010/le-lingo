import { cache } from "react";
import { db } from "./drizzle";
import { courses, userProgress, units } from "./schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const data = await db
    .select({
      activeCourseId: userProgress.activeCourseId,
      courseTitle: courses.title,
      courseImageSrc: courses.imageSrc,
    })
    .from(userProgress)
    .innerJoin(courses, eq(userProgress.activeCourseId, courses.id))
    .where(eq(userProgress.userId, userId));

  return data[0] || null;
});

export const getCourses = cache(async () => {
  const data = await db.select().from(courses);
  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.select().from(courses).where(eq(courses.id, courseId));
  return data;
});


export const getUnits = cache(async() => {
  const userProgress = await getUserProgress();

  if(!userProgress?.activeCourseId){
    return [];
  }

  const data = await db.select()
  .from(units)
  .where(eq(units.courseId, userProgress.activeCourseId))
  // .with({
  //   lessons: true,
  //   challenges: true,
  // });

});
