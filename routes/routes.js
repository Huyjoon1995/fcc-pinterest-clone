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
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images')
        ];
    }
});
