const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let fruits = [];


app.get('/fruits', (req, res) => {
  res.json(fruits);
});


app.post('/fruits', (req, res) => {
  const newFruit = req.body.fruit;
  fruits.push(newFruit);
  res.json({ message: 'Fruit added successfully!', fruits });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
