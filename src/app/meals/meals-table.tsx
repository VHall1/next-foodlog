"use client";

import { Meal } from "@prisma/client";
import { MagnifyingGlassIcon, Pencil1Icon } from "@radix-ui/react-icons";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Table,
  TextField,
} from "@radix-ui/themes";
import NextLink from "next/link";
import { DeleteMeal } from "./delete-meal";
import { TableLayout } from "./table-layout";

export const MealsTable = ({ meals }: { meals: Meal[] }) => {
  return (
    <>
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>

      <Box mt="4">
        <TableLayout>
          {meals.map((meal) => (
            <Table.Row key={`meal-${meal.id}`}>
              <Table.RowHeaderCell>
                <Link asChild>
                  <NextLink href={`/meals/${meal.id}`}>
                    Meal - #{meal.id}
                  </NextLink>
                </Link>
              </Table.RowHeaderCell>
              <Table.Cell>{meal.calories}</Table.Cell>
              <Table.Cell>{meal.proteins}</Table.Cell>
              <Table.Cell>{meal.carbs}</Table.Cell>
              <Table.Cell>{meal.fats}</Table.Cell>
              <Table.Cell>{meal.createdAt.toLocaleString()}</Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="2">
                  <IconButton variant="soft">
                    <NextLink href={`/meals/${meal.id}/edit`}>
                      <Pencil1Icon width="16" height="16" />
                    </NextLink>
                  </IconButton>
                  <DeleteMeal mealId={meal.id} />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </TableLayout>
      </Box>
    </>
  );
};
