App.NewRecipeIndexRoute = App.Route.Extend({
    model: function () {
        return this.store.find('ingredient');
    }
});
