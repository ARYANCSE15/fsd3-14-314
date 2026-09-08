import http from "http";
import team from "./teams";
const server=http.createServer((req,res)=>{
    res.end("<h2>SIH INTERNAL</h2>");

});
server.listen(5000,()=>{
    console.log("Server is running");
});