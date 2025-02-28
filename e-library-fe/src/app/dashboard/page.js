"use client"
import * as React from 'react';
import { Button, TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react'
import { useClient } from '@/hooks/user';

const columns = [
  { id: 'id', label: 'id', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'date',
    label: 'Available Date',
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


function createData(id, name, status, date, action) {
  return {id, name, status, date, action};
}

const rows = [
  createData(1, 'India', 'Available','now'),
  createData(2, 'China', 'Available','now'),
  createData(3, 'Italy', 'Available','now'),
  createData(4, 'United States', 'Available','now'),
  createData(5, 'Canada', 'Available','now'),
  createData(6, 'Australia', 'Available','now'),
  createData(7, 'Germany', 'Available','now'),
  createData(8, 'Ireland', 'Available','now'),
  createData(9, 'Mexico', 'Available','now'),
  createData(10, 'Japan', 'Available','now'),
  createData(11, 'France', 'Available','now'),
  createData(12, 'United Kingdom', 'Available','now'),
  createData(13, 'Russia', 'Available','now'),
  createData(14, 'Nigeria', 'Available','now'),
  createData(15, 'Brazil', 'Available','now'),
];

export default function Dashboard() {
  const userInfo = useClient()
  console.log(userInfo.getUserName())

  const [search, setSearch] = useState("")
  const [bookList, setBookList] = useState([])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(()=>{
    console.log(search)
  },[search])
  useEffect(()=>{
    console.log(page)
  },[page])
  return (
    <div >
      <div style={{ display: "flex", width: "100%", flexDirection: "column", paddingLeft: 50, paddingRight: 50, alignItems: 'center' }}>
        <div style={{textAlign:'center', fontWeight:"700", fontSize:100, color:"grey"}}>Welcome! {userInfo.getUserName()}</div>
        <input
          style={{backgroundColor:"white", borderRadius:10, padding:10, boxShadow: "1px 3px 10px grey", width:"100%"}}
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
        />
        <button style={{padding:10, border:"solid 2px black", width:200, marginTop:20, borderRadius:20}}> Search </button>
      </div>
      <Paper sx={{ width: '94%', overflow: 'hidden', margin: '3%', backgroundColor: "rgba(0,0,0,0.4)" }}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id == 'action'){
                        return (
                          <TableCell key={column.id} align={column.align} style={{ borderBottom: "none" }}>
                            <Button>Borrow</Button>
                            <Button>Extend</Button>
                            <Button>Return</Button>
                          </TableCell>
                        );
                      }else{
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
