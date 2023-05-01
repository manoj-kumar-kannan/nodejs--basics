const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

// ***************************************************************
// constants

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'student_management',
};

// ***************************************************************
// mongodb connection handlers

mongoose
  .connect(MONGODB_URI, connectionParams)
  .then(() => console.log('Mongoose Connected'))
  .catch((err) => console.log('Mongoose Connection Failed: ', err.message));

mongoose.connection.on('connected', () => console.log('MongoDB Connected'));

mongoose.connection.on('error', (err) =>
  console.log('DB Connection Failed: ', err.message)
);

mongoose.connection.on('disconnected', () =>
  console.log('Mongoose Connection Disconnected')
);

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose disconnected on app termination');
  process.exit(0);
});
