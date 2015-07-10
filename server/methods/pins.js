Meteor.methods({
    insertPin: function(doc) {
        doc = _.extend(doc, {userId: Meteor.userId()});
        Pins.insert(doc);
    }
});
