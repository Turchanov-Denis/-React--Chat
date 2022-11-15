import { createSlice } from '@reduxjs/toolkit'

export const mainSlicer = createSlice({
  name: 'mainSlicer',
  initialState: {
    isAuth: false,
  },
  reducers: {
    changeAuth(state) {
        state.isAuth = !state.isAuth
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeAuth } = mainSlicer.actions

export default mainSlicer.reducer