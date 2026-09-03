import http from "http";
const server=http.createServer((req , res)=>{
   if(req.url === '/' && req.method === 'GET')
    res.end('home page')
else if(req.url === '/product' && req.method === 'GET'){
    const products=[
        {
            id: 1,
            name: "mobile",
            price: 2000,
        },
        {
            id: 2,
            name: "duster",
            price: 10,
        },

    ];
    res.end(JSON.stringify(products));
    
}
else if(req.url === '/product' && req.method === 'POST')
    let body;
req.on("data",(chunk)=>{
    body+=chunk;
})
req.on("end",()=>{
    const product=JSON.parse(body);
    res.writeHead(201,{
        "content-type":"application/json",
    });
    res.end(
        JSON.stringify({
            msg: "product added",
            product,
        }),
    );
});
    
else if(req.url === '/product' && req.method === 'PUT')
    res.end('update product')
else if(req.url === '/product' && req.method === 'DELETE')
    res.end('remove product')
})
server.listen(4444,()=> console.log("prg11 is running on port 4444"))