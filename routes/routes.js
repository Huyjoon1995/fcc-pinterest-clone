Router.configure({
    layoutTemplate: 'defaultLayout',
    progress: true
});

Router.plugin('ensureSignedIn', {
    except: ['login']
});

Router.route('/login', {
    name: 'login',
    layoutTemplate: 'authLayout'
});

Router.route('/', {
    name: 'home',
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images'),
            Meteor.subscribe('favorites'),
            Meteor.subscribe('users')
        ];
    }
});

Router.route('/search/:searchQuery', {
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
    waitOn: function() {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images')
        ];
    }
});

Router.route('/settings', {
    name: 'settings'
});
