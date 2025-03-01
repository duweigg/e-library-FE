import { extentBookUrl, extentRecordUrl, getRecordListUrl, returnRecordUrl } from "./urls"

// status: 0: all, 1: open, 2: closed
export const getRecordList = async (page, pageSize, title, status) => {
    const token = localStorage.getItem("token")
    const res = await fetch(
        getRecordListUrl,
        {
            method: "POST",
            body: JSON.stringify({ page, pageSize, title, status }),
            headers: {
                Authorization: "Bearer " + token
            }
        }
    )
    if (!res.ok) throw new Error('Failed to fetch record data')
    return await res.json()
}

export const extendRecord = async (record_ids) => {
    const token = localStorage.getItem("token")
    const res = await fetch(
        extentRecordUrl,
        {
            method: "POST",
            body: JSON.stringify({ ids: record_ids }),
            headers: {
                Authorization: "Bearer " + token
            }
        }
    )
    if (!res.ok) throw new Error('Failed to extend record')
    return await res.json()
}

export const returnRecord = async (record_ids) => {
    const token = localStorage.getItem("token")
    const res = await fetch(
        returnRecordUrl,
        {
            method: "POST",
            body: JSON.stringify({ ids: record_ids }),
            headers: {
                Authorization: "Bearer " + token
            }
        }
    )
    if (!res.ok) throw new Error('Failed to extend record')
    return await res.json()
}