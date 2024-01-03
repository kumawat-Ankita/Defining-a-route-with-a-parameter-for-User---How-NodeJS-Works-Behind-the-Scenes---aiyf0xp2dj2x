const express = require('express');
const app = express();

// Route to handle /user/:userId
app.get('/user/:userId', (req, res) => {
  const { userId } = req.params;

  // Check if userId exists
  if (!userId) {
    return res.status(400).json({ error: 'User ID is missing' });
  }

  // Assuming userId is always a number (you can add additional validation as needed)
  // Return the userId in the response
  return res.status(200).json({ userId });
});

module.exports = app;
