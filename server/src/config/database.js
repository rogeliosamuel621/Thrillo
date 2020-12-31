/* eslint-disable no-console */
import { connect } from 'mongoose';
const MODE = process.env.MODE;

const database = async () => {
  try {
    await connect(process.env.DATABASE_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    MODE === 'dev' ? console.log('DATABASE CONNECTED') : null;
  } catch (error) {
    console.log('SOMETHING WENT WRONG', error);
    process.exit(1);
  }
};

export default database;
