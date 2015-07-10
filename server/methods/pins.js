Meteor.methods({
    insertPin: function (doc) {
        Schema.Pins.clean(doc);
        Pins.insert(doc);
    }
});
