Template.search.helpers({
    pins: function () {
        return Session.get('pins');
    },
    users: function() {
        return Session.get('users');
    },
    showUsers: function() {
        return Session.get('showUsers');
    },
    getData: function() {
        return {searchQuery: Template.instance().data};
    }
});