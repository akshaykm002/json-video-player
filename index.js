//import json-server
const jsonServer = require('json-server')

// create json server using json-server library
const mediaPlayerServer = jsonServer.create()

// set up a path/route for db.json file
const router = jsonServer.router("db.json")

// Returns middlewares used by json server.
const middleware = jsonServer.defaults()

// set up port number for server app
const port = 4000 || process.env.PORT

// use middlewares and router in server 
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)  

// server lisetn for request from frontend
mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player started at port: ${port}, and waiting for client request !!!!`);
})