const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

app.get('/', (req, res) => {
    res.send("<h1> Awesome App About Breads</h1>")
}) 
// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  

app.listen(PORT, () => {
    console.log("Listening on pert:", PORT );
})

