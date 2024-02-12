const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log(formData)
  // Process form data here
  // Example: save to a database or send an email

  res.status(200).send('Form submitted successfully');
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});