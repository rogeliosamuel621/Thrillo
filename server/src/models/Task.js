import { model, Schema } from 'mongoose';

const taskSchema = new Schema({
  boardId: { type: String, required: true },
  todoId: { type: Schema.Types.ObjectId, ref: 'list', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const Task = model('tasks', taskSchema);

export default Task;
