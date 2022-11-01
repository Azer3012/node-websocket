import http from 'http'

import {WebSocketServer} from 'ws'

import fs from 'fs'

const server=http.createServer()

const wss=new WebSocketServer({server})


server.on("request",(req,res)=>{
    const fileContent=fs.readFileSync("index.html")
    res.end(fileContent.toString())
})

//connect olmaq ucun
wss.on('connection',(socket)=>{
    console.log('client connected');

    //messaji dinlemek ucun
    socket.on("message",(data)=>{
        console.log("message recieved " + data);

        //mesaj gondermek ucun
        socket.send("Hi  client")

        //bu yuxaridaki mesaj ancaq bir client-a gedir bunu butun clientlara gondermek ucun ise
        wss.clients.forEach(client=>{
            client.send('Hi clients')
        })
    })
})



server.listen(8080,()=>console.log('sever listening'))