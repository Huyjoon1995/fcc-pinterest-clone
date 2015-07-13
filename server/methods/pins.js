Meteor.methods({
    insertPin: function (doc) {
        Schema.Pins.clean(doc);
        Pins.insert(doc);
    },
    deletePin: function(id) {
        Pins.remove(id);
    }
});
