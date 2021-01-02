import { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  column: {
    type: Schema.Types.ObjectId,
    ref: 'Column'
  }
});

export default model('task', TaskSchema);
