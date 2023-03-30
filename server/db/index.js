const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://phananh26082001:26082001Anh@cluster0.i88xji7.mongodb.net/thuc-tap-tot-nghiep?retryWrites=true&w=majority', {useNewUrlParser: true})
  .catch(e => {
    console.error('Connection error', e.message)
  })

  const db = mongoose.connection

  module.exports = db