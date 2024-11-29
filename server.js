require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');


const connectDB = require('./config/db');


const incidentRoutes = require('./routes/incidents');
const userRoutes = require('./routes/userRoutes'); 
const notificationRoutes = require('./routes/notificationRoutes');


connectDB();

const app = express();

e
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(helmet()); 
app.use(morgan('dev')); 


app.use('/api/incidents', incidentRoutes); 
app.use('/api/users', userRoutes); 
app.use('/api/notifications', notificationRoutes); 


app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running!', timestamp: new Date() });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
