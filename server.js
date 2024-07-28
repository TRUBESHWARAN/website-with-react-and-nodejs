// index.js

import express from 'express';
import { createServer } from 'http';
import path from 'path';
import cors from 'cors';
import sequelize from './config/db.js';
// import sequelize from './config/db.js';
// import authRoutes from './routes/authRoutes.js';
// import chatRoutes from './routes/chatRoutes.js';
// import configureSocket from './socket.js'; // Import the socket configuration

const app = express();
const server = createServer(app);
// const io = configureSocket(server); // Configure Socket.io with the server

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from 'file_uploads' directory
// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, 'file_uploads')));

// Routes
app.use('/api/auth', authRoutes); // Route for authentication
// app.use('/api/chat', chatRoutes); // Route for chat functionality

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    try{
        await sequelize.sync({ force: false});
        console.log('Database connected...');
    }catch (error) {
        console.log('database connection failed');
    }
    console.log(`Server running on port ${PORT}`);
  
});