import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { Server } from 'socket.io' 
import { createServer } from 'node:http'

const port = process.env.PORT ?? 3000

const app =  express()
const server = createServer(app)
const io = new Server(server)

app.use(logger('dev'))
app.use(cors());

io.on('connection', () => {
    console.log('a user has connected')
})


server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})