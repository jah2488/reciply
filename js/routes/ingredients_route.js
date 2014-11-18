App.IngredientsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('ingredient');
    }
});
