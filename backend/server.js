const express = require('express')
const cors = require('cors');
const app = express().use(cors())
const port = 3000

const server = require('http').Server(app)

const io =require('socket.io')(server, {cors: {origin: "*"}});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('connnect', socket.id)
    
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})