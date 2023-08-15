import { prisma } from "@/util/prisma";
import { cache } from "react";
import { MealsTable } from "./meals-table";

export default async function Page() {
  const meals = await getMeals();
  return <MealsTable meals={meals} />;
}

const getMeals = cache(() => {
  // throw new Error('')
  throw new Promise(() => {});

  return prisma.meal.findMany({ take: 10 });
});
