require('dotenv').config();
require('../config/db');
const { Coffee, Variety } = require('./models');
const seed = require('./seed');

const main = async () => {
  await Coffee.collection.drop();
  await Variety.collection.drop();
  console.log('>> Clean collections');

  console.log('>> Populating seeds in DB');
  const coffees = await Coffee.insertMany(seed.coffees);
  const varieties = await Variety.insertMany(seed.varieties);
  console.log('>> Correctly populated seeds in DB');

  console.log('>> Updating Coffees with the correct variety in DB');
  await Promise.all(
    coffees.map(async (coffee) => {
      const dbVariety = varieties.find((variety) => variety._varietyId === coffee._variety);
      await coffee.updateOne({ variety: dbVariety._id });
    })
  );
  console.log('>> Coffees updated');
  
  console.log('>> Updating Varieties with the correct coffees in DB');
  await Promise.all(
    varieties.map(async (variety) => {
      const dbCoffees = variety._coffees.map((coffeeId) =>{
        const relatedCoffee = coffees.find((coffee) => coffee._coffeeId === coffeeId);
        return relatedCoffee._id;
      });
      await variety.updateOne({ coffees: dbCoffees });
    })
  );
  console.log('>> Updated Varieties in DB');

  await Coffee.updateMany(
    {},
    {
      $unset: {
        _coffeeId: 1,
        _variety: 1,
      }
    }
  );

  await Variety.updateMany(
    {},
    {
      $unset: {
        _varietyId: 1,
        _coffees: 1
      }
    }
  );
  console.log('>> Deleted all private fields');
};

main()
  .then(() => {
    console.log('>> Populated and corrected all seeds in DB');
    process.exit();
  })
  .catch((err) => {
    console.log('>> There was an error populating seeds in DB: ', err);
    process.exit(1);
  });
