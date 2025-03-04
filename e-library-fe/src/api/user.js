import useSWR from 'swr'
import { getUserInfoUrl, registerUrl, signInUrl } from './urls'

export const getUserInfo = async () => {
  const token = localStorage.getItem("token")
  const res = await fetch(
    getUserInfoUrl,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }
  )
  if (!res.ok) throw new Error('Failed to fetch user data')
  return await res.json()
}

export const Register = async (username, password, nickname) => {
  const resp = await fetch(
    registerUrl,
    {
      method: "POST",
      body: JSON.stringify({ username, password, nickname })
    }
  )
  if (resp.ok) {
    return await resp.json()
  } else {
    console.log("fetch err: ", resp.err)
  }
}

export const Signin = async (username, password) => {
  const resp = await fetch(
    signInUrl,
    {
      method: "POST",
      body: JSON.stringify({ username, password })
    }
  )
  if (resp.ok) {
    let data = await resp.json()
    localStorage.setItem("token", data.token)
    return true
  } else {
    return false
  }
}
