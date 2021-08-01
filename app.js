const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, {cors: {
  origin: "*",
  methods: ["GET", "POST"]
}});

let currentEstimates = [];

io.on("connection", (socket) => {
  console.log("New client connected");

  let user = '';
  socket.emit('currentEstimates', currentEstimates);

  socket.on("story-point", (name, storyPoint) => {
    user = name;
    const index = currentEstimates.findIndex((estimate) => estimate.name === name);
    if (index !== -1) {
      currentEstimates[index].storyPoint = storyPoint;
    } else {
      currentEstimates.push({ name: name, storyPoint: storyPoint});
    }
    socket.broadcast.emit('estimates', { name: name, storyPoint: storyPoint});
  });

  socket.on("reveal-estimates", (reveal) => {
    if(!reveal) {
      currentEstimates = [];
    }
    io.emit('reveal', reveal);
  });

  socket.on("disconnect", () => {
    io.emit('remove-user', user);
    currentEstimates = currentEstimates.filter((estimate) => estimate.name !== user);
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));