import React from 'react'
import styled from 'styled-components'
import { DataTable, Pagination } from 'carbon-components-react'
import { AddAlt16 } from '@carbon/icons-react'
import { spacing } from '../theme'

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
  TableSelectRow
} = DataTable;

const TableContainerStyled = styled(TableContainer)`
  min-width: 0;
  width: 100%;
  margin-top: ${ spacing[7] };
`

// FIXME: Hacked styling to make text centered in cell
const TableCellStyled = styled(TableCell)`
  padding-top: 0 !important;
  vertical-align: middle !important;
`

const renderTable = (batchActionClick) => (
  {
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
      <TableToolbar {...getToolbarProps()}>
        <TableBatchActions {...getBatchActionProps()}>
          <TableBatchAction
            renderIcon={AddAlt16}
            iconDescription="Download the selected rows"
            onClick={batchActionClick(selectedRows)}
          >
            Add
        </TableBatchAction>
        </TableBatchActions>
        {/* <TableToolbarContent>
          <TableToolbarSearch onChange={onInputChange} />
        </TableToolbarContent> */}
      </TableToolbar>
      <Table {...getTableProps()} size='tall'>
        <TableHead>
          <TableRow>
            <TableSelectAll {...getSelectionProps()} />
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} {...getRowProps({ row })}>
              <TableSelectRow {...getSelectionProps({ row })} />
              <TableCellStyled colSpan={100}>
                {row.cells.map((cell) => (
                  <p key={cell.id}>{cell.value}</p>
                ))}
              </TableCellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Show:"
        page={1}
        pageNumberText="Page Number"
        pageSize={10}
        pageSizes={[
          10,
          20,
          30,
          40,
          50
        ]}
        totalItems={103}
      />
    </TableContainerStyled>
  );

export default ({ headers, rows, handleSelected }) => {
  return (
    <DataTable
      headers={headers}
      render={renderTable(handleSelected)}
      rows={rows}
    />
  )
}
