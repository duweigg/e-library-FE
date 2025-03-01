const domain = "http://localhost:8000/"

export const registerUrl = domain + "user/signup"
export const signInUrl = domain + "user/signin"
export const getUserInfoUrl = domain + "user/info"
//books
export const getBookListUrl = domain + "book/list"
export const borrowBookUrl = domain + "book/borrow"

//record
export const getRecordListUrl = domain + "record/list"
export const extentRecordUrl = domain + "record/extend"
export const returnRecordUrl = domain + "record/return"
