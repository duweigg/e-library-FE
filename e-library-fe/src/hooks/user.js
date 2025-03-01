import { useSelector } from "react-redux"

const useClient = ()=>{
    let userInfo = useSelector((store)=>store.user)||{}
    const getUserInfo = ()=>{
        return userInfo
    }
    const getUserName = ()=>{
        return userInfo.nickname
    }
    const getUserBooks = ()=>{
        return userInfo.books
    }
    return {getUserInfo,getUserName, getUserBooks }
}

export {useClient}