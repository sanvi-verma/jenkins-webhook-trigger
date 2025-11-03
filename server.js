const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// serve static files
app.use(express.static('public'));

// route
app.get('/api/weather', (req, res) => {
  res.json({
    location: 'Pune',
    temperature: '28°C',
    condition: 'Sunny 🌞',
    message: 'Weather Monitor is running successfully!',
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
