import { cache } from "react";
import { db } from "./drizzle";
import { courses, userProgress } from "./schema";
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
    })
    .from(userProgress)
    .where(eq(userProgress.userId, userId));

  return data[0] || null;
});

export const getCourses = async () => {
  const data = await db.select().from(courses);
  return data;
};

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.select().from(courses).where(eq(courses.id, courseId));

  return data;
});
