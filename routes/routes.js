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

Router.route('/search/:searchQuery', function () {
    this.layout('defaultLayout');
    this.render('search', {
        data: function() {
            var query = this.params.searchQuery;
            EasySearch.search('pins', query, function(err, result) {
                Session.set('pins', result.results);
            });

            EasySearch.search('users', query, function(err, result) {
                Session.set('users', result.results);
            });

            return query;
        }
    });
}, {
    name: 'search',
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images')
        ];
    }
});

Router.route('/my-profile', {
    name: 'myProfile',
    layoutTemplate: 'defaultLayout',
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images')
        ];
    }
});
