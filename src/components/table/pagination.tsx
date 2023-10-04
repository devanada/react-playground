import { Table } from "@tanstack/react-table";

interface Props {
  table: Table<any>;
}

export default function TablePagination(props: Props) {
  const { table } = props;

  return (
    <div className="join">
      <button
        className="join-item btn"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        {"<<"}
      </button>
      <button
        className="join-item btn"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"<"}
      </button>
      <button className="join-item btn">
        Page {table.getState().pagination.pageIndex + 1}
      </button>
      <button
        className="join-item btn"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {">"}
      </button>
      <button
        className="join-item btn"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {">>"}
      </button>
    </div>
  );
}
