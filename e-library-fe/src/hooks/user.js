import { useSelector } from "react-redux"

const useClient = ()=>{
    let userInfo = useSelector((store)=>store.user)||{}
    const getUserInfo = ()=>{
        return userInfo
    }
    const getUserName = ()=>{
        return userInfo.name
    }
    const getUserToken = ()=>{
        return userInfo.token
    }
    const getUserBooks = ()=>{
        return userInfo.books
    }
    return {getUserInfo,getUserName,getUserToken, getUserBooks }
}

export {useClient}