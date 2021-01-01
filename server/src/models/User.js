import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: false, default: '' }
});

const User = model('users', userSchema);

export default User;
