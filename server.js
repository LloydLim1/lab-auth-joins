require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const auth = require('./middleware/auth');
const authController = require('./controllers/authController');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});


app.get('/profile', auth(true), authController.profile);

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

const reportRoutes = require('./routes/reportRoutes');
// Mount after auth routes:
app.use('/api', reportRoutes);
