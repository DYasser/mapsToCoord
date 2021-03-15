const http = require('http'),
    config = require('./api/config/env-config').CONFIG,
    port = config.port,
    app = require('./app'),
    server = http.createServer(app)

console.log('Listening on port ... ', port)
server.listen(port)