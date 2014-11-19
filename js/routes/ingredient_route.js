App.IngredientRoute = App.ApplicationRoute.extend({
    model: function (params) {
        return this.store.find('ingredient', params.id);
    }
});
