import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/bun-sqlite";

import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const db = drizzle(sql, { schema });

export default db;
