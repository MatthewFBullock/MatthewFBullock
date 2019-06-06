// load our app server using express
const express = require('express');
const app = express();

// app.get("/", (req, res) => {
//     console.log("Responding to root route");
//     res.send("Hello from route0000001");
// });

// app.get("/", (req, res) => {
//     res.sendfile(__dirname + '/index.html');
//     // res.render('index.html');
    
//     // res.sendfile(__dirname + '/style.css');
//     // res.sendFile(__dirname + '/style.css');
// });
app.use(express.static('public'));


app.listen(8080, () => {
    console.log("Server is up and listening on 8080...");
});

// app.use(express.static('MatthewFBullock'));