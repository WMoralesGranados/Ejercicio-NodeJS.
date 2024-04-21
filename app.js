const express = require('express');
const app = express();
const PORT = 3000;

app.get('/is_alive', (req, res) => {
  const response = {
    code: 200,
    message: 'is alive'
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
