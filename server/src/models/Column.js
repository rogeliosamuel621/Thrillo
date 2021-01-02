import { model, Schema } from 'mongoose';

const ColumnSchema = new Schema({
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  },
  title: { type: String, required: true, default: 'Column' }
});

export default model('Column', ColumnSchema);
