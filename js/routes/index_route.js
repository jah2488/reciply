App.IndexRoute = App.ApplicationRoute.extend({
    model: function () {
        return this.store.find('recipe');
    }
});
