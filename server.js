const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://<kilaniamira1999>:<xUsVeKJyrOlwSKDg>@cluster0.mongodb.net/taskmanager?retryWrites=true&w=majority', {
  
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const taskRoutes = require('./routes/taskRoutes');

// Middleware
app.use(express.json());
app.use(cors());

// Task Routes
app.use('/api/tasks', taskRoutes);

