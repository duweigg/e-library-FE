import { Button, TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { BookListActionCell } from '../components/actionCell';


const columns = [
  { id: 'id', label: 'id', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'total_count',
    label: 'Total Count',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'available_count',
    label: 'Available Count',
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

export const BookList = ({ bookList, totalbooks, page, rowsPerPage, setRowsPerPage, setPage, setReloadBooks, setReloadRecords }) => {

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setReloadBooks(true)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    setReloadBooks(true)
  };

  return <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: "50px", backgroundColor: "rgba(0,0,0,0.4)" }}>
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
                        <BookListActionCell
                          id={row.id}
                          key={column.id}
                          setReloadBooks={setReloadBooks}
                          setReloadRecords={setReloadRecords}
                        />
                      );
                    } else {
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: "white", borderBottom: "none" }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
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