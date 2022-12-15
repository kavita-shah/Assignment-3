const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.post("/add", (req, res) => {
    console.log(req.body)
    Sum = parseFloat(req.body.num1) + parseFloat(req.body.num2);
    res.send(`The sum of given two numbers : ${Sum}`);
})

app.post("/sub", (req, res) => {
    console.log(req.body)
    Sub = parseFloat(req.body.num1) - parseFloat(req.body.num2);
    res.send(`The difference of given two numbers : ${Sub}`);
})

app.post("/multiply", (req, res) => {
    console.log(req.body)
    Multiply = parseFloat(req.body.num1) * parseFloat(req.body.num2);
    res.send(`The product of given numbers : ${Multiply}`);
})

app.post("/divide", (req, res) => {
    console.log(req.body)
    Divide = parseFloat(req.body.num1) / parseFloat(req.body.num2);

    if (req.body.num2 == 0) {
        res.send("Cannot divide by zero")
    } else {
        res.send(`The division of given numbers : ${Divide}`);
    }
})

app.listen(3000, () => console.log("App listening on port 3000!"))

module.exports = app;