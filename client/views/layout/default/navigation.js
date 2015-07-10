Template.navigation.events({
    'click a[data-logout]': function(e) {
        e.preventDefault();
        AccountsTemplates.logout();
        Router.go('login');
    }
});
