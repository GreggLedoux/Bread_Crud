const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes
app.get('/', (req, res) => {
    res.send("<h1> Awesome App About Breads</h1>")
}) 

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  
  // 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
    console.log("Listening on pert:", PORT );
})

