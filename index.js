const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exhbs({
  defaultLayout: 'main',
  extname:  '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, resp) => {
  response.render('home', {
    name: 'Bernard'
  })
})

app.use((err, req, resp, next) => {
  console.log(err)
  resp.status(500).send('Something Broke')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log('server is listening on ' + port)
})
