Template.user.onCreated(function () {
    this.userId = this.data;
});

Template.user.helpers({
    user: function() {
        return Meteor.users.findOne(Template.instance().userId);
    },
    pins: function() {
        return Pins.find({userId: Template.instance().userId}, {sort: {creationDate: -1}}).fetch();
    },
    favoratePins: function() {
        var favs = Favorites.find({userId: Template.instance().userId}).fetch();
        var pinIds = _.pluck(favs, 'pinId');
        return Pins.find({_id: {$in: pinIds}}).fetch();
    }
});
