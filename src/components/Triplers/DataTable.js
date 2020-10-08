import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { DataTable, Pagination } from "carbon-components-react";
import { AddAlt16 } from "@carbon/icons-react";
import { spacing, colors } from "../../theme";
import { track } from "../../analytics";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableSelectAll,
  TableSelectRow,
} = DataTable;

const TableContainerStyled = styled(TableContainer)`
  min-width: 0;
  width: 100%;
  margin-top: ${spacing[7]};
  overflow: visible;
`;

const TableToolbarContainer = styled.div`
  position: sticky;
  top: 5rem;
  z-index: 1;
`;

const TableTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${spacing[5]};
  background-color: ${colors.gray[20]};
  width: 100%;
  font-weight: 600;
`;

// FIXME: Hacked styling to make text centered in cell
const TableCellStyled = styled(TableCell)`
  padding-top: 0 !important;
  vertical-align: middle !important;
`;

// FIXME: Hacked styling to reduce checkbox width in table
const TableSelectRowStyled = styled(TableSelectRow)`
  width: ${spacing[5]};
`;

// FIXME: Hide `x Selected` summary in data table when counting row selection
const TableBatchActionsHack = createGlobalStyle`
  #data-table .bx--batch-summary {
    visibility: hidden;
  }
`;

const renderTable = (batchActionClick) => ({
  rows,
  headers,
  getHeaderProps,
  getSelectionProps,
  getToolbarProps,
  getBatchActionProps,
  getRowProps,
  onInputChange,
  selectedRows,
  getTableProps,
  getTableContainerProps,
}) => (
  <TableContainerStyled {...getTableContainerProps()}>
    <TableToolbarContainer>
      <TableToolbar {...getToolbarProps()}>
        <TableBatchActionsHack />
        <TableBatchActions id="data-table" {...getBatchActionProps()}>
          <TableBatchAction
            renderIcon={AddAlt16}
            iconDescription="Download the selected rows"
            onClick={batchActionClick(selectedRows)}
          >
            Add {selectedRows.length} Tripler(s) to my list
          </TableBatchAction>
        </TableBatchActions>
        <TableTitleContainer>
          Possible Vote-Triplers you might know
        </TableTitleContainer>
      </TableToolbar>
    </TableToolbarContainer>
    <Table {...getTableProps()} size="tall">
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id} {...getRowProps({ row })}>
            <TableSelectRowStyled {...getSelectionProps({ row })} />
            <TableCellStyled colSpan={100}>
              {row.cells.map((cell) => (
                <p key={cell.id}>{cell.value}</p>
              ))}
            </TableCellStyled>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainerStyled>
);

export default ({ headers, rows, handleSelected }) => {
  return (
    <DataTable
      headers={headers}
      render={renderTable(handleSelected)}
      rows={rows}
    />
  );
};
