const express = require('express')
const cors = require('cors');
const app = express().use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 3000

const server = require('http').Server(app)

const io = require('socket.io')(server, { cors: { origin: "*" } });
const rooms = new Map(); //fake database
app.get('/rooms/:id', (req, res) => {
    const roomId = req.params.id
    const obj = rooms.has(roomId) ? {
        users: [...rooms.get(roomId).get('users').values()],
        messages: [...rooms.get(roomId).get('messages').values()]
    } : { users: [], messages: [] }
    res.json(obj)
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
    socket.on('ROOM:JOIN', ({ roomId, userName }) => {
        socket.join(roomId)
        rooms.get(roomId).get('users').set(socket.id, userName)
        const users = [...rooms.get(roomId).get('users').values()]
        socket.to(roomId).emit('ROOM:SET_USERS', users)



    }
    )
    socket.on('disconnect', () => {
        console.log('disconnected');
        rooms.forEach((value, roomId) => {
            if (value.get('users').delete(socket.id)) {
                const users = [...rooms.get(roomId).get('users').values()]
                socket.to(roomId).emit('ROOM:SET_USERS', users)
                console.log(users);
            }
        })
    })

})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})