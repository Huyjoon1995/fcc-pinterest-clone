Template.pinContainer.onRendered(function () {
    var container = $('.grid');
    container.imagesLoaded(function() {
        container.masonry({
            itemSelector: '.grid-item',
            gutter:10,
            percentPosition: true
        });
    });
});

Template.pinContainer.helpers({
    isFavorite: function() {
        var userId = Meteor.userId();
        return !_.isUndefined(Favorites.findOne({pinId: this._id, userId: userId}));
    }
});

Template.pinContainer.events({
    'click [data-toggle-favorite]': function(e) {
        e.preventDefault();
        Meteor.call('toggleFavorite', this._id);
    }
});
