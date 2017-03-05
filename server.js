var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', (client) => {

  client.on('coords', (coords) => {
    console.log(coords);
  });

  client.on('disconnect', (err) => {
    console.log('disconnect firing', err);
  });
});

server.listen(process.env.PORT || 6969);
