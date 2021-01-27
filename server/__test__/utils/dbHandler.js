import mongoose from 'mongoose';

const dbConnection = async (done) => {
  await mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  done();
};

const dbClose = async (done) => {
  await mongoose.connection.close();
  done();
};

export { dbClose, dbConnection };
