import { model, Schema } from 'mongoose';

const todoSchema = new Schema({
  idBoard: { type: String, required: true },
  title: { type: String, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: 'cards', required: true }]
});

const Todo = model('todo', todoSchema);

export default Todo;
