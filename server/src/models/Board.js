import { model, Schema } from 'mongoose';

const BoardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

export default model('Board', BoardSchema);
