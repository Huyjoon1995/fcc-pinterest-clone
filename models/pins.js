Pins = new Meteor.Collection('pins');
Pins.attachSchema(Schema.Pins);

Pins.helpers({
    getImage: function() {
        return Images.findOne(this.image);
    }
});
