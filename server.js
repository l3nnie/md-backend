require('dotenv').config();
const express = require('express');
const cors = require('cors');
const educationRoutes = require('./routes/education.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route fix
app.get('/', (req, res) => {
  res.send('API is running. Try /api/medical-education');
});

// API routes
app.use('/api/medical-education', educationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
