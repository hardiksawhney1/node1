
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res)=>{
    res.send('hi');
});
// Handle POST request from the form
app.post('/split-array', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).send('Invalid input: Data must be an array.');
  }

  const evenNumbers = data.filter((number) => number % 2 === 0);
  const oddNumbers = data.filter((number) => number % 2 !== 0);

  res.json({ evenNumbers, oddNumbers });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});