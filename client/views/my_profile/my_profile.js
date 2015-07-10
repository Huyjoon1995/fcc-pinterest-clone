Template.myProfile.helpers({
    pins: function() {
        return Pins.find({userId: Meteor.userId()});
    }
});
