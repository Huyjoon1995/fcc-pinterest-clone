Meteor.startup(function () {
    sAlert.config({
        effect: 'bouncyflip',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });
});