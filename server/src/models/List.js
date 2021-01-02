import { model, Schema } from 'mongoose';

const listSchema = new Schema({
  boardId: { type: String, required: true },
  title: { type: String, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: 'task', required: true }]
});

const List = model('list', listSchema);

export default List;
