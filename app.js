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

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("story-point", (name, storyPoint) => {
    console.log(`${name} chooses ${storyPoint}`);
    socket.broadcast.emit('estimates', { name: name, storyPoint: storyPoint});
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));