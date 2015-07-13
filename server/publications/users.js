Meteor.publish('users', function() {
   return Meteor.users.find({}, {
       fields: {
           'profile.user': 1
       }
   });
});
