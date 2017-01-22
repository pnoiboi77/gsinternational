const http = require('express')
const app = express()
const port = 3000

app.get('/', (req, resp) => {
  resp.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log('server is listening on ' + port)
})