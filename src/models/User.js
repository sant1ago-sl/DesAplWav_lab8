import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    default: "Usuario Anonimo" 
  },
  email: { 
    type: String, 
    unique: true, 
    default: () => `user_${Date.now()}@temp.com` 
  },
  password: { 
    type: String, 
    default: "Pass123456" 
  }
});

export default mongoose.model('User', userSchema);
