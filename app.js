express = require('express')
path = require('path')
app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs')

app.use(express.urlencoded({extended: true}))

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ]; 

app.get('/', (req, res, next) => {
     
    res.render("index", {messages: messages})
})

app.get('/new', (req, res, next) => {
    res.render("form")
})

app.post('/new', (req, res) => {
    messages.push({text: req.body.text, user: req.body.user, added: new Date() })
    res.redirect("/")
})

const PORT = 3000
app.listen(PORT, () => console.log("working!"))