Meteor.methods({
    insertPin: function(doc) {
        Pins.insert(doc);
    }
});
