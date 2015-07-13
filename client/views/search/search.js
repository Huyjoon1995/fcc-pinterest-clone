Template.search.onCreated(function () {
    var instance = this;
    instance.pins = new ReactiveVar([]);
    EasySearch.search('pins', this.data, function(err, result) {
        instance.pins.set(result.results);
    });
});

Template.search.helpers({
    pins: function () {
        return Template.instance().pins.get();
    }
});
