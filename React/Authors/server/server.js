
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.use(cookieParser());
require('./config/mongoose.config');
require('./routes/author.routes')(app);
require('./routes/user.routes')(app);
// app.listen(process.env.MY_PORT,()=>{
//     console.log("You are connected to port",process.env.MY_PORT);
// })

const server = app.listen(process.env.MY_PORT,()=> {
    console.log("You are connected to port",process.env.MY_PORT);
})

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
})
io.on("connection", socket => {
    console.log('socket id: ' + socket.id);
    
    // ON ADD
    socket.on("add_author", authorId => {
        // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    	//     "event_from_client" event
        console.log(authorId)
        socket.broadcast.emit("author_added", authorId);
    });

    // ON DELETE
    socket.on("deleted_author", (authorId) => {
        console.log(authorId)
        socket.broadcast.emit("author_deleted", authorId);
    });

    // ON UPDATE
    socket.on("update_author", (authorId) => {
        console.log(authorId)
        socket.broadcast.emit("author_updated", authorId);
    });
});

