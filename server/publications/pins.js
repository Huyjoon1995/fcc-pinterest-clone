Meteor.publish('pins', function() {
    return Pins.find({}, {sort: {creationDate: -1}});
});

Meteor.publish('searchPins', function () {

});