
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cors = require('cors')

app.use(cors())
// parse application/x-www-form-urlencoded



// const pass_mongodb = process.env.MONGODB_URL
// parse application/json


// mongoose.connect(pass_mongodb || 'mongodb://localhost/vuejsshopping')

// mongoose.connect('mongodb://localhost/vuejsshopping')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//check
app.use(express.static(__dirname + '/public/'));

// for heroku

// if (process.env.NODE_ENV === 'production') {
//     // Static folder
//     app.use(express.static(__dirname + '/public/'));
  
//     // // Handle SPA
//     app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

