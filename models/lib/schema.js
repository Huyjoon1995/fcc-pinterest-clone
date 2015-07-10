Schema = {};

Schema.Pins = new SimpleSchema({
    image: {
        type: 'String',
        label: 'Image',
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                accept: 'image/*'
            }
        }
    },
    userId: {
        type: String,
        label: 'User',
        autoValue: function() {
            return this.userId;
        }
    }
});

