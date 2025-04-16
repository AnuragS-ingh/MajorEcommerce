import http from "http";


const PORT = 9000 || 8000;

const server = http.createServer()

server.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is listning on the port ${PORT}`)
    }
})