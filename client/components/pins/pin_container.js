Template.pinContainer.helpers({
    pins: function () {
        return Pins.find({userId: Meteor.userId()});
    }
});

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
