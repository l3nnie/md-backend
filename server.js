require('dotenv').config();
const express = require('express');
const cors = require('cors');
const educationRoutes = require('./routes/education.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/medical-education', educationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    kenyanResources: [
      'Kenya Medical Practitioners Council: https://www.kmpdc.go.ke',
      'Ministry of Health: https://www.health.go.ke'
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Medical Education Server running on port ${PORT}`);
});require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const educationRoutes = require('./routes/education.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Define the allowed origin
const allowedOrigin = 'https://md-delta-teal.vercel.app'; // <--- Specify your frontend's exact origin here

// Configure CORS to allow calls only from the specified origin
app.use(cors({
  origin: allowedOrigin
}));

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
