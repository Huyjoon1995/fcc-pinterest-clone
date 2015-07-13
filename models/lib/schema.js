Schema = {};
Schema.Favorites = new SimpleSchema({
    userId: {
        type: String,
        label: 'User'
    },
    pinId: {
        type: String,
        label: 'Pin'
    }
});

Schema.Pins = new SimpleSchema({
    title: {
        type: String,
        label: 'Title',
        max: 55
    },
    totalFavored: {
        type: Number,
        label: 'Total favored',
        defaultValue: 0
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
    tags: {
        type: [String],
        autoform: {
            type: 'tags'
        }
    },
    creationDate: {
        type: Date,
        label: 'Creation Date',
        autoValue: function () {
            return new Date();
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

Schema.UserProfile = new SimpleSchema({
    name: {
        type: String,
        max: 50
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: [Object],
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
