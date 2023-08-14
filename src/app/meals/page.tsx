import { PrismaClient } from "@prisma/client";

async function getMeals() {
  const prisma = new PrismaClient();
  const meals = await prisma.meal.findMany({ take: 10 });
  return meals;
}

export default async function Meals() {
  const meals = await getMeals();

  return (
    <div>
      test
      <pre>{JSON.stringify(meals, null, 2)}</pre>
    </div>
  );
}
