require('dotenv').config();
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
