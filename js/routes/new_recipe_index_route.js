App.NewRecipeIndexRoute = App.AuthenticatedRoute.Extend({
    model: function () {
        return this.store.find('ingredient');
    }
});
