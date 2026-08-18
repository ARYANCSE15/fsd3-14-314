import http from "http";
const server=http.createServer();
server.on("request",(req,res)=>{
    res.write("Welcome to server side programming")
    res.end();
});
server.listen(5000,()=>{
    console.log("Server is running");
});