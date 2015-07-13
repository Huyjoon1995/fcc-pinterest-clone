Router.plugin('ensureSignedIn', {
    except: ['login']
});

Router.route('/', {
    name: 'home',
    layoutTemplate: 'defaultLayout'
});

Router.route('/login', {
    name: 'login'
});

Router.route('/search/:searchQuery', {
    layoutTemplate: 'defaultLayout',
    name: 'search',
    data: function() {
        return this.params.searchQuery;
    },
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images'),
            Meteor.subscribe('favorites'),
            Meteor.subscribe('users')
        ];
    }
});

Router.route('/user/:_id', {
    name: 'user',
    layoutTemplate: 'defaultLayout',
    data: function() {
        return this.params._id;
    },
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images'),
            Meteor.subscribe('favorites'),
            Meteor.subscribe('users')
        ];
    }
});

Router.route('/new', {
    name: 'newPin',
    layoutTemplate: 'defaultLayout',
    waitOn: function() {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images')
        ];
    }
});

Router.route('/settings', {
    name: 'settings',
    layoutTemplate: 'defaultLayout'
});
