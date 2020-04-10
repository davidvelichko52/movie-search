// require needed modules

let express = require('express')

// declare a new express app

let app = express()

// declare rouets

app.get('/', (req, res) => {
    res.send('Home page')
})

// pick a port

app.listen(3000, () => {
    console.log('ready to 🎸')
})