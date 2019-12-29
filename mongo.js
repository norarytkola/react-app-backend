const mongoose = require('mongoose');


const url=`mongodb+srv://fullstack:Password1@cluster0-9jztp.mongodb.net/messages?retryWrites=true`
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url, { useNewUrlParser: true })

const messageSchema = new mongoose.Schema({
    sender: String,
    email: String,
    content: String,
    date: Date,
})

const Message = mongoose.model('Message', messageSchema)

const message = new Message({
    sender:'Test User',
    email:'test@user.com',
    content: 'This is a test message.',
    date: new Date(),
})

message.save().then(response => {
  console.log('new message saved!');
  mongoose.connection.close();
})
