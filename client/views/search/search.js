Template.search.onCreated(function () {
    var instance = this;
    instance.pins = new ReactiveVar([]);
    instance.autorun(function () {
        EasySearch.search('pins', Template.currentData(), function(err, result) {
            instance.pins.set(result.results);
        });
    });
});

Template.search.helpers({
    pins: function () {
        return Template.instance().pins.get();
    }
});
