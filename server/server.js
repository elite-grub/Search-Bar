const express = require('express')
const app = express()
const port = process.env.port || 3001

app.use(express.static('client/dist'));

app.listen(port, () => console.log(`Listening to app on port ${port}!`))

