import { io } from 'socket.io-client'

const connectSocket = (port='http://localhost:3000') => { io(port) }

export default connectSocket