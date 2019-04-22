
const express = require('express');


const port = process.env.PORT || 8080;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// Declare the folder to use for public files, such as javascripts, images and css
//app.use(express.static('public'));
app.set('view engine', 'ejs');

var spaces = 0;



io.on('connection', function(socket) {
  
  console.log('Client connected...')
  socket.on('hello', function(data) {
    console.log(data);
    socket.emit('spaces', data);
  });

  socket.on('sendSpaces', function(data) {

    spaces = data;
    console.log(data);

  });
  socket.on('test', function(data) {
    console.log(data);
  });


});
app.get('/', function(req, res){

  res.render('index', {spaces:spaces});
});




server.listen(port);
console.log("Listening on port: " + port);



//availablespaces = parseInt(req.query.spaces);
//res.send({"availablespaces":availablespaces});
