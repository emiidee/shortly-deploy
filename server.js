var app = require('./server-config.js');

var port = process.env.PORT || 4356;

app.listen(port);

console.log('Server now listening on port ' + port);
