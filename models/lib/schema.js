Schema = {};

Schema.Pins = new SimpleSchema({
    imageUrl: {
        type: String,
        label: 'Image url',
        regEx: SimpleSchema.RegEx.Url
    },
    userId: {
        type: String,
        label: 'User'
    }
});
