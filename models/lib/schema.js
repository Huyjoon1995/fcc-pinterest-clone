Schema = {};

Schema.Pins = new SimpleSchema({
    title: {
        type: String,
        label: 'Title',
        max: 55
    },
    description: {
        type: String,
        label: 'Description',
        optional: true,
        max: 150,
        autoform: {
            rows: 3
        }
    },
    image: {
        type: String,
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
        autoValue: function () {
            return this.userId;
        }
    }
});

