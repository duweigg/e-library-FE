import { borrowBook } from "@/api/books"
import { extendRecord, returnRecord } from "@/api/records"
import { Button, TableCell } from "@mui/material"

export const BookListActionCell = ({ id, setReloadBooks }) => {
  return <TableCell align={"right"} style={{ borderBottom: "none" }}>
    <Button onClick={() => {
      borrowBook([id])
      setReloadBooks(true)
    }}>
      Borrow
    </Button>
  </TableCell>
}

export const RecordListActionCell = ({ id, setReloadRecords }) => {
  return <TableCell align={"right"} style={{ borderBottom: "none" }}>
    <Button onClick={() => {
      extendRecord([id])
      setReloadRecords(true)
    }}>
      Extend
    </Button>
    <Button onClick={() => {
      returnRecord([id])
      setReloadRecords(true)
    }}>Return</Button>
  </TableCell>
}