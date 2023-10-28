const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('>> Connected to DB!');
  })
  .catch((err) => {
    console.log('Error connecting to DB: ', err);
    process.exit(1);
  });
