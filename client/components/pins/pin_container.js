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
                        container.imagesLoaded(function () {
                            grid.masonry('reloadItems');
                            grid.masonry('layout');
                        });
                    },
                    removed: function () {
                        container.imagesLoaded(function () {
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
    },
    isMine: function () {
        return this.userId === Meteor.userId();
    }
});

Template.pinContainer.events({
    'click [data-toggle-favorite]': function () {
        Meteor.call('toggleFavorite', this._id);
    },
    'click [data-delete]': function () {
        var id = this._id;
        var element = $('[data-id="' + id + '"]');
        element.confirmation(
            {
                placement: 'right',
                popout: true,
                onConfirm: function () {
                    Meteor.call('deletePin', id);
                    sAlert.info('The pin has been deleted. We salute it goodbye and may it rest in peace.');
                },
                onCancel: function () {
                    sAlert.info('The pin has not been deleted and it\'s still full of life!');
                }
            });
        element.confirmation('show');
    }
});
