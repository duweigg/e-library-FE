"use client"
import * as React from 'react';
import { useEffect, useState, useCallback } from 'react'
import { getUserInfo } from '@/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '@/redux/reducers/user';
import { getBookList } from '@/api/books';
import { BookList } from '../../components/booklist';
import _ from "lodash";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const dispatch = useDispatch()
  const router = useRouter()

  const [search, setSearch] = useState("")

  let userInfo = useSelector((store) => store.user) || {}
  useEffect(() => {
    let getUserInfoAsync = async () => {
      const data = await getUserInfo()
      dispatch(updateUserInfo(data.user))
    }
    getUserInfoAsync()
  }, [])

  const [reloadBooks, setReloadBooks] = React.useState(true);

  const [bookList, setBookList] = useState([])
  const [totalbooks, setTotalBooks] = useState(0)
  const [bookPage, setBookPage] = React.useState(0);
  const [bookRowsPerPage, setBookRowsPerPage] = React.useState(10);
  useEffect(() => {
    let searchAsync = async () => {
      const data = await getBookList(bookPage, bookRowsPerPage, search)
      setBookList(data.books)
      setTotalBooks(data.total)
    }
    if (reloadBooks) {
      searchAsync()
      setReloadBooks(false)
    }
  }, [bookPage, bookRowsPerPage, search, reloadBooks])

  return (
    <div style={{ marginLeft: "3%", marginRight: "3%", marginTop: "10px" }}>
      <div onClick={() => { router.push("/profile") }} style={{ color: "white" }}>My Records</div>
      <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: 'center' }}>
        <div style={{ textAlign: 'center', fontWeight: "700", fontSize: 100, color: "grey" }}>Welcome! {userInfo.nickname}</div>
        <input
          style={{ backgroundColor: "white", borderRadius: 10, padding: 10, boxShadow: "1px 3px 10px grey", width: "100%" }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setReloadBooks(true)
          }}
        />
      </div>
      <BookList
        bookList={bookList || []}
        totalbooks={totalbooks}
        page={bookPage}
        rowsPerPage={bookRowsPerPage}
        setPage={setBookPage}
        setRowsPerPage={setBookRowsPerPage}
        setReloadBooks={setReloadBooks}
      />
    </div>
  );
}
