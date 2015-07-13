Meteor.publish('users', function() {
   return Meteor.users.find({}, {
       fields: {
           'profile.username': 1
       }
   });
});
