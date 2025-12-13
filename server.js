import express from 'express';
import sum from './sum.js';

const app = express();


app.get('/wish', (req, res) => {
    res.json({ message: 'Have a great day!' });
});


app.get('/sum/:a/:b', (req, res) => {
  const{a , b}  = req.params;
    res.json({ sum: sum(parseInt(a), parseInt(b))});
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});