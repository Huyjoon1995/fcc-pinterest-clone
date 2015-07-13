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
            Meteor.subscribe('favorites')
        ];
    }
});

Router.route('/my-profile', {
    name: 'myProfile',
    layoutTemplate: 'defaultLayout',
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images'),
            Meteor.subscribe('favorites')
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
