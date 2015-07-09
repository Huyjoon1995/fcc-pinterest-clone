Router.plugin('ensureSignedIn', {
    except: ['login']
});

Router.route('/', {name: 'home'});
Router.route('/login', {name: 'login'});
