import { createSlice } from '@reduxjs/toolkit'

export const mainSlicer = createSlice({
  name: 'mainSlicer',
  initialState: {
    joined: false,
    roomId: 1,
    userName: null,
    users: [],
    messages: [],
  },
  reducers: {
    changeAuth(state, action) {
      state.joined = !state.joined
      state.roomId = action.payload.roomId
      state.userName = action.payload.userName
    },

    setUsers(state, action) {
      state.users = action.payload.users
    },
    setMessages(state, action) {
      console.log('setMessages',action.payload);
      state.messages = action.payload
    },
    updateMessages(state, action) {
      console.log('setMessages',action.payload);
      state.messages.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeAuth, setUsers, setMessages,updateMessages } = mainSlicer.actions

export default mainSlicer.reducer