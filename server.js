const express = require('express');
const app = express();
const server = require("http").Server(app);
const { v4:uuidv4 } = require("uuid");
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

 
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .send('Hello server is running')
//     .end();
// });

app.get('/',(req,rsp)=> {
  rsp.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req,rsp)=> {
  rsp.render("room",{roomId: req.params.room});
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});