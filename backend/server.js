const express = require('express')
const cors = require('cors');
const app = express().use(cors())
app.use(express.json())
const port = 3000

const server = require('http').Server(app)

const io = require('socket.io')(server, { cors: { origin: "*" } });
const rooms = new Map(); //fake database
app.get('/rooms', (req, res) => {
    res.json(rooms)
})
app.post('/rooms', (req, res) => {
    const { roomId, userName } = req.body
    if (!rooms.has(roomId)) {
        rooms.set(roomId, new Map([['users', new Map()], ['messages', []]]))
    }
    res.json([...rooms.keys()])
})
io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('ROOM:JOIN',({roomId,userName})=>{
        socket.join(roomId)
        rooms.get(roomId).get('users').set(socket.id,userName)
        const users = [...rooms.get(roomId).get('users').values()]
        console.log(rooms,roomId,users)
        socket.to(roomId).emit('ROOM:JOINED', users)
    })

})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})