import { Table } from "@radix-ui/themes";
import { TableLayout } from "./table-layout";

export default function Loading() {
  return (
    <>
      <span className="sr-only">Loading...</span>
      <TableLayout>
        {[...new Array(5)].map((_, index) => (
          <Table.Row key={`skeleton-${index}`}>
            <Table.RowHeaderCell>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 animate-pulse" />
            </Table.RowHeaderCell>
            <Table.Cell>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 animate-pulse" />
            </Table.Cell>
            <Table.Cell>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 animate-pulse" />
            </Table.Cell>
            <Table.Cell>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 animate-pulse" />
            </Table.Cell>
            <Table.Cell>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 animate-pulse" />
            </Table.Cell>
            <Table.Cell>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 animate-pulse" />
            </Table.Cell>
            <Table.Cell>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 animate-pulse" />
            </Table.Cell>
          </Table.Row>
        ))}
      </TableLayout>
    </>
  );
}
