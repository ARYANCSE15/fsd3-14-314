import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        const stream = createReadStream("./pages/airtag.html");

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        stream.pipe(res);

    }

    else if (req.url === "/airtag.css") {

        const stream = createReadStream("./pages/airtag.css");

        res.writeHead(200, {
            "Content-Type": "text/css"
        });

        stream.pipe(res);

    }

    else if (req.url === "/mobile") {

        const mobile = createReadStream("./data/products.json", {
            encoding: "utf-8"
        });

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        mobile.pipe(res);

    }
    else if(req.url === "/manual"){
        const manual = createReadStream("./data/chatgpt.txt", {encoding:"utf-8"

    });
    manual.pipe(res);
}

    else {

        res.statusCode = 404;
        res.end("NOT FOUND");

    }

});

server.listen(4000, () => {
    console.log("server is running....");
});