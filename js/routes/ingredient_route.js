App.IngredientRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('ingredient', params.id);
    }
});
