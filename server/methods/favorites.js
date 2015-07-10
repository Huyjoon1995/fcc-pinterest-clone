Meteor.methods({
    toggleFavorite: function (pinId) {
        var userId = Meteor.userId();
        var fav = Favorites.findOne({userId: userId, pinId: pinId});
        if (_.isUndefined(fav))
            Meteor.call('insertFavorite', pinId, userId);
        else
            Meteor.call('removeFavorite', fav._id)
    },
    insertFavorite: function (pinId, userId) {
        Favorites.insert({pinId: pinId, userId: userId});
    },
    removeFavorite: function (id) {
        Favorites.remove(id);
    }
});
