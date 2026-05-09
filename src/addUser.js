import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function addUser() {
  try {
    await mongoose.connect(MONGO_URI);
    
    const newUser = {
      name: "Usuario Final",
      email: "final@ejemplo.com",
      password: "Password123#"
    };

    await User.create(newUser);
    console.log('✅ Usuario añadido correctamente con nombre, email y password.');
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

addUser();
