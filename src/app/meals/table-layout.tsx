import { Table } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

export const TableLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Meal</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Calories</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Proteins</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Carbs</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Fats</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{children}</Table.Body>
    </Table.Root>
  );
};
