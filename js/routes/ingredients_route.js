App.IngredientsRoute = App.ApplicationRoute.extend({
    model: function () {
        return this.store.find('ingredient');
    }
});
