import { prisma } from "@/util/prisma";

export default async function Meals() {
  const meals = await prisma.meal.findMany({ take: 10 });

  return (
    <div>
      test
      <pre>{JSON.stringify(meals, null, 2)}</pre>
    </div>
  );
}
