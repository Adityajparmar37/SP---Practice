// const http = require('http');

// const options = {
//     hostname: "localhost",
//     port: 8000,
//     path: '/hello',
//     method: 'GET',
//     headers: {
//         'cookie': "myCookies=aditya"
//     }
// };

// // Create the server
// const server = http.createServer((req, res) => {
//     console.log("Server received a request");
//     console.log("Cookies from request:", req.headers.cookie);

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


//     //hanlde Preflight request
//     if (req.method === 'OPTIONS') {
//         res.writeHead(200);
//         // res.end();
//         return;
//     }



//     // hanlding routing 
//     if (req.url === "/" && req.method === "GET") {
//         const responseData = JSON.stringify({ greeting: "First route" });
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(responseData);
//         return; // Prevent further execution
//     }

//     if (req.url === "/profile" && req.method === "GET") {
//         const responseData = JSON.stringify({ data: "Profile Page" });
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(responseData);
//         return;
//     }

//     if (req.url === '/create' && req.method === 'POST' && req.headers['content-type'] === 'application/json') {
//         const bodyData = [];
//         req.on('data', (chunk) => {
//             bodyData.push(chunk);
//         }).on('end', () => {
//             const bufferData = Buffer.concat(bodyData);
//             try {
//                 const requestBody = JSON.parse(bufferData);
//                 console.log("Request Body data:", requestBody);
//                 res.writeHead(200, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({ message: 'Data received successfully!' }));
//             } catch (err) {
//                 res.writeHead(400, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({ error: 'Invalid JSON' }));
//             }
//         });
//         return;
//     }

//     if (req.url === '/hello' && req.method === 'GET') {
//         res.writeHead(200, "Successful", {
//             'Content-Type': "application/json",
//             'Set-Cookie': "myCookies=HelloFromServer; HttpOnly; Path=/",
//         });
//         res.end(JSON.stringify({ data: "Hello World" }));
//         return;
//     }

//     // Default 404 response
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page not found!');
// });

// server.keepAliveTimeout = 60000;

// // Start the server
// server.listen(8000, () => {
//     console.log("Server Listening on PORT 8000");


//     // By default we are telling server to listen to this request with options hence it will run as soon as we start are server 
//     // making clinet reuqest but http.request
//     const req = http.request(options, (res) => {
//         console.log("Client request sent to:", `${options.hostname}:${options.port}${options.path}`);
//         console.log("Client request method:", options.method);

//         console.log(`Status: ${res.statusCode}`);
//         console.log(`Headers: ${JSON.stringify(res.headers)}`);

//         res.on('data', (chunk) => {
//             console.log(`Body: ${chunk}`);
//         });

//         res.on("end", () => {
//             console.log("No More Data in Response");
//         });
//     });

//     req.on('error', (e) => {
//         console.error(`Problem with client request: ${e.message}`);
//     });

//     req.end(); // End the client request
// });

// // Close the server after 10 seconds
// setTimeout(() => {
//     server.close(() => {
//         console.log("Server closed");
//     });
// }, 10000);


// const http2 = require('http2');
// const options = {
//     key: "path-toprivate-key.pem",
//     cert: 'path-to-public-cert.pem'
// };

// const server = http2.createServer(options);

// server.on('stream', (stream, requestHeaders) => {
//     stream.respond({
//         ':status': 200,
//         'content-type': 'text/plain'
//     });

    
// stream.write('Hello World');
// stream.end();
// })


// server.listen(3000, () => {
//     console.log('Started Server on port 3000')
// })