const io = require('socket.io')(3010,{
    cors: {
        origin: '*',
        methods: ['GET','POST']
    }
});

io.on('connection', (socket) => { });
