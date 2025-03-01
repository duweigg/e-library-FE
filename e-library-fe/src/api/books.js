import { borrowBookUrl, getBookListUrl } from "./urls"

export const getBookList = async (page, pageSize, title) => {
  const res = await fetch(
    getBookListUrl,
    {
      method: "POST",
      body: JSON.stringify({ page, pageSize, title })
    }
  )
  if (!res.ok) throw new Error('Failed to fetch book data')
  return await res.json()
}

export const borrowBook = async (book_ids) => {
  const token = localStorage.getItem("token")
  const res = await fetch(
    borrowBookUrl,
    {
      method: "POST",
      body: JSON.stringify({ ids: book_ids }),
      headers: {
        Authorization: "Bearer " + token
      }
    }
  )
  if (!res.ok) throw new Error('Failed to fetch book data')
  return await res.json()
}
