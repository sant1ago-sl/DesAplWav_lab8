import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const moreUsers = [
  { name: 'Roberto Gomez', email: 'roberto@empresa.com', password: 'Password123!' },
  { name: 'Lucia Fernandez', email: 'lucia@empresa.com', password: 'Password123!' },
  { name: 'Marcos Torres', email: 'marcos@empresa.com', password: 'Password123!' },
  { name: 'Elena Sanz', email: 'elena@cliente.com', password: 'Password123!' },
  { name: 'Javier Peña', email: 'javier@cliente.com', password: 'Password123!' }
];

async function seedMore() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB...');
    
    // Insertar los nuevos usuarios
    await User.insertMany(moreUsers);
    console.log('✅ ¡5 usuarios adicionales añadidos con éxito!');
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error al añadir usuarios:', error.message);
    process.exit(1);
  }
}

seedMore();
