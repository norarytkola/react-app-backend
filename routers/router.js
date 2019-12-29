  
const messageRouter = require('express').Router()
const Message = require('../models/message')

messageRouter.get('/', async(request, response, next) => {
  try{
  const Messages=await Message.find({})
  response.json(Messages.map(m => m.toJSON()))
 
  } catch (exception) {
  next(exception)
  }
})

messageRouter.post('/', async(request, response, next) => {
  const body = request.body
  try {
    const message=new Message({
        sender:body.sender,
        email:body.email,
        content:body.content,
        date:new Date(),
    })
    const newM=await message.save()
        response.json(newM.toJSON())
    }
  catch(exception) {
    next(exception)
  }
})

module.exports = messageRouter