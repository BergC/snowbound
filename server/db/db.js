require('dotenv').config();

const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  const mongoURI = process.env.MONGODB_URI;
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);

    //Exit process with failure.
    process.exit(1);
  }
};

module.exports = connectDB;
