const io = require('socket.io')(5010,{
    cors: {
        origin: '*',
        methods: ['GET','POST']
    }
});

io.on('connection', (socket) => { 
    console.log("connected");
});
