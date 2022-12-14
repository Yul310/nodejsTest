// var figlet = require('figlet');

// figlet('Hello World!!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });




const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send('dog')
})

app.get('/cat', function (req, res) {
    res.send('cat')
})

app.get('/user/:id', function (req, res) {
    const q = req.params
    console.log(q)
})
app.get('/user/:id', function (req, res) {
    const q = req.params
    console.log(q)
})

app.listen(3000)