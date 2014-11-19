App.EditRecipeRoute = App.AuthenticatedRoute.extend({
    model: function (params) {
        return this.store.find('recipe', params.id);
    }
});
