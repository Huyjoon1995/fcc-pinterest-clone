Template.search.helpers({
    pins: function () {
        return Session.get('pins');
    },
    users: function() {
        return Session.get('users');
    }
});
