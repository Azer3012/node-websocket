import http from 'http'

import {WebSocketServer} from 'ws'

import fs from 'fs'

const server=http.createServer()

const wss=new WebSocketServer({server})


server.on("request",(req,tes)=>{
    const fileContent=fs.readFileSync("index.html")
    resizeBy.end(fileContent.toString())
})

wss.on('connection',()=>{
    console.log('client connected');
})



server.listen(8080,()=>console.log('sever listening'))