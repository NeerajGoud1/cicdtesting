import express from 'express';

const app = express();


app.get('/wish', (req, res) => {
    res.json({ message: 'Have a great day!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});