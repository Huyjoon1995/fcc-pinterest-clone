Template.user.helpers({
    user: function() {
        var id = Template.instance().data;
        return Meteor.users.findOne(id);
    },
    pins: function() {
        return Pins.find({userId: Meteor.userId()}, {sort: {creationDate: -1}});
    }
});
