const express = require('express');
const app = express();
const { PORT } = require('./config/config');
const auth = require('./middlewares/auth')
const routes = require('./routes');
require("dotenv").config();

require('./config/express')(app);
require('./config/mongoose');
app.use(auth())

//const io = require("socket.io")(http, {
  //  cors: {
   //    origin: ["https://nexnotesapp.herokuapp.com/"],
  //    credentials: true
  //  }
//});
//const ChatRoom = require('./models/ChatRoom')

//io.on('connection', async function (socket) {
   
   // Get chats from mongo collection
 //  let asd = await ChatRoom.find().populate("buyer").populate("seller");

//socket.emit('output', asd);

// socket.on('input', function(data){
 //    console.log(data)
//});
//});

// Handle input events
  //io.on('input', async function (data) {
   //console.log(data)

   // let chat = await ChatRoom.findById(chatId);
    //console.log(chat)
  // chat.insert({name: name, message: message}, function(){
    //    io.emit('output', [data]);

       // Send status object
      // sendStatus({
      //     message: 'Message sent',
         //  clear: true
    //  });
  // });

//});



app.use(routes);
app.listen(PORT, () => console.log(`Server is active at https://nexnotesapp.herokuapp.com/${PORT}...`));
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
