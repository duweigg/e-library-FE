import { Button, TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { BookListActionCell, RecordListActionCell } from '../components/actionCell';
import moment from "moment";

const columns = [
  { id: 'id', label: 'id', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'created_at',
    label: 'Borrowed At',
    minWidth: 170,
    align: 'right',
    format: (data) => {
      return (
        <div>
          <div>{moment(data).format("HH:mm:ss")}</div>
          <div>{moment(data).format("DD/MM/YYYY")}</div>
        </div>
      )
    }
  },
  {
    id: 'due_at',
    label: 'Due At',
    minWidth: 170,
    align: 'right',
    format: (data) => {
      return (
        <div>
          <div>{moment(data).format("HH:mm:ss")}</div>
          <div>{moment(data).format("DD/MM/YYYY")}</div>
        </div>
      )
    }
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'action',
    label: 'Actions',
    minWidth: 170,
    align: 'right',
  },
];

export const RecordList = ({ bookList, totalbooks, page, rowsPerPage, setRowsPerPage, setPage, setReloadBooks, setReloadRecords }) => {

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setReloadBooks(true)
    setReloadRecords(true)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    setReloadBooks(true)
    setReloadRecords(true)
  };

  return <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: "rgba(0,0,0,0.4)" }}>
    <TableContainer sx={{
      maxHeight: 440, overflow: 'auto',
      scrollbarWidth: 'none', // Firefox
      msOverflowStyle: 'none', // IE and Edge
      '&::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari, and Opera
      },
    }}>
      <Table stickyHeader aria-label="sticky table" >
        <TableHead >
          <TableRow >
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth, backgroundColor: "#050d2d", color: "white" }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookList
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id == 'action') {
                      return (
                        <RecordListActionCell
                          id={row.id}
                          key={column.id}
                          setReloadBooks={setReloadBooks}
                          setReloadRecords={setReloadRecords}
                        />
                      );
                    } else {
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: "white", borderBottom: "none" }}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      style={{ color: "white" }}
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={totalbooks}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
}