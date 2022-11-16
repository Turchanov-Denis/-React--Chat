import { createSlice } from '@reduxjs/toolkit'

export const mainSlicer = createSlice({
  name: 'mainSlicer',
  initialState: {
    joined: false,
    roomId: null,
    userName: null,
  },
  reducers: {
    changeAuth(state, action) {
     
      state.joined = !state.joined
      state.roomId = action.payload.roomId
      state.userName = action.payload.userName
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeAuth } = mainSlicer.actions

export default mainSlicer.reducer