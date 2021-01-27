import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: false, default: '' }
});

export default model('User', UserSchema);
