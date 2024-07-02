const express = require('express');
const app = express();
const port = 3000;

// Channel data
const channelData = {
  email: "stacklearner@example.com",
  website: "www.youtube.com/@StackLearner",
  subscribers: "113K subscribers",
  videos: "1,696 videos",
  views: "8,385,136 views",
  joined: "Jun 7, 2017",
  location: "Bangladesh"
};

// Endpoint to get channel data
app.get('/api/channel', (req, res) => {
  res.json(channelData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
