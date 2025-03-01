// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nickname: "",
  books:[]
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
        return {...action.payload}
    },
  }
})

export const { updateUserInfo } = userSlice.actions
export default userSlice.reducer
