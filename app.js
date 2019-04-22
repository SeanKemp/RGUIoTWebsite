
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;
var spaces = 0;

app.set('view engine', 'ejs');

io.on('connection', function(socket) {

  console.log('Client connected...')

  socket.on('sendSpaces', function(data) {
    spaces = data;
    console.log(data);
  });
  //socket.emit('spaces', 'test');
});
app.get('/', function(req, res){

  res.render('index', {spaces:spaces});
});

app.use(express.static('public'));

server.listen(port);
console.log("Listening on port: " + port);
