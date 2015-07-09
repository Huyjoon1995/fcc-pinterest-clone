AutoForm.hooks({
    insertPinForm: {
        onSubmit: function(doc) {
            Schema.Pins.clean(doc);
            Meteor.call('insertPin', doc);
            this.done();
            return false;
        }
    }
});