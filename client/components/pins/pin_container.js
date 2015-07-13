Template.pinContainer.onRendered(function () {
    var instance = this;
    var container = $('.grid');
    container.imagesLoaded(function () {
        var grid = container.masonry({
            itemSelector: '.grid-item',
            gutter: 10,
            percentPosition: true
        });

        instance.autorun(function () {
            if (_.isFunction(Template.currentData().pins.observeChanges))
            Template.currentData().pins.observeChanges({
                added: function (doc) {
                    container.imagesLoaded(function() {
                        grid.masonry('reloadItems');
                        grid.masonry('layout');
                    });
                }
            });
        });
    });
});

Template.pinContainer.helpers({
    pins: function () {
        return Template.currentData().pins;
    },
    isFavorite: function () {
        var userId = Meteor.userId();
        return !_.isUndefined(Favorites.findOne({pinId: this._id, userId: userId}));
    }
});

Template.pinContainer.events({
    'click [data-toggle-favorite]': function (e) {
        e.preventDefault();
        Meteor.call('toggleFavorite', this._id);
    }
});
