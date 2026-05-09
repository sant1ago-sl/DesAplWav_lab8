import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seedUsers = [
  { name: 'Santi Admin', email: 'santi@ejemplo.com' },
  { name: 'Ana Lopez', email: 'ana@ejemplo.com' },
  { name: 'Carlos Ruiz', email: 'carlos@ejemplo.com' }
];

async function runSeed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');
    
    // Opcional: Limpiar la colección antes de insertar
    // await User.deleteMany({}); 

    await User.insertMany(seedUsers);
    console.log('Successfully added 3 new users!');
    
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

runSeed();
