import { updateUserInfo } from '@/redux/reducers/user'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url) // Pass the correct URL
  if (!res.ok) throw new Error('Failed to fetch user data')
  return res.json() // Return the parsed JSON data
}

const UserInfo = () => {
    const dispath = useDispatch()
    const { data, error, isValidating } = useSWR('/api/user', fetcher)
    if (err == null){
        dispath(updateUserInfo(data))
    }
}

export default UserInfo
