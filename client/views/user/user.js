Template.user.helpers({
    user: function() {
        var id = this.data;
        return Meteor.users.find(id);
    },
    pins: function() {
        return Pins.find({userId: Meteor.userId()}, {sort: {creationDate: -1}});
    }
});
