// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "Dummy",
  token:"",
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
