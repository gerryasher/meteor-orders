import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('Number of Orders : ', Orders.find().count());
  console.log('Number of Reviews: ', Reviews.find().count());
});
