import { prisma } from "@/util/prisma";
import { NextResponse } from "next/server";

export async function DELETE(_: any, { params }: { params: { meal: string } }) {
  await prisma.meal.delete({ where: { id: Number(params.meal) } });

  return NextResponse.json(undefined, { status: 204 });
}
