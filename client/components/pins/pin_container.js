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
