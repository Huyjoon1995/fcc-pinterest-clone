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

Router.route('/my-profile', {
    name: 'myProfile',
    layoutTemplate: 'defaultLayout',
    waitOn: function() {
        Meteor.subscribe('pins');
    }
});
