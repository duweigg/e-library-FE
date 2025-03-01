"use client"
import * as React from 'react';
import { useEffect, useState, useCallback } from 'react'
import { getUserInfo } from '@/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '@/redux/reducers/user';
import { RecordList } from '../../components/recordList';
import { getRecordList } from '@/api/records';
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

    const [reloadRecords, setReloadRecords] = React.useState(true);
    const [recordList, setRecordList] = useState([])
    const [totalRecords, setTotalRecords] = useState(0)
    const [recordPage, setRecordPage] = React.useState(0);
    const [recordRowsPerPage, setRecordRowsPerPage] = React.useState(10);
    const [recordQueryStatus, setRecordQueryStatus] = useState(1)
    useEffect(() => {
        let searchAsync = async () => {
            const data = await getRecordList(recordPage, recordRowsPerPage, search, recordQueryStatus)
            setRecordList(data.records)
            setTotalRecords(data.total)
        }
        if (reloadRecords) {
            searchAsync()
            setReloadRecords(false)
        }
    }, [recordPage, recordRowsPerPage, search, reloadRecords, recordQueryStatus])

    return (
        <div >
            <div onClick={() => { router.push("/dashboard") }} style={{ color: "white" }}>Go To Dashboard</div>
            <div style={{ display: "flex", width: "94%", flexDirection: "column", margin: "3%", alignItems: 'center' }}>
                <div style={{ textAlign: 'center', fontWeight: "700", fontSize: 100, color: "grey" }}>Welcome! {userInfo.nickname}</div>
                <input
                    style={{ backgroundColor: "white", borderRadius: 10, padding: 10, boxShadow: "1px 3px 10px grey", width: "100%" }}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setReloadRecords(true)
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", margin: "3%" }}>
                <button style={{ backgroundColor: "white", marginTop: "30px", width: "200px" }} onClick={() => {
                    if (recordQueryStatus == 1) {
                        setRecordQueryStatus(0)
                    }
                    if (recordQueryStatus == 0) {
                        setRecordQueryStatus(1)
                    }
                    setReloadRecords(true)
                }}>
                    {recordQueryStatus == 0 ? "Show Open Records" : "Show All Records"}
                </button>
                <div style={{ height: "10px" }}></div>
                <RecordList
                    bookList={recordList || []}
                    totalbooks={totalRecords}
                    page={recordPage}
                    rowsPerPage={recordRowsPerPage}
                    setPage={setRecordPage}
                    setRowsPerPage={setRecordRowsPerPage}
                    setReloadRecords={setReloadRecords}
                />
            </div>
        </div >
    );
}
