App.CategoryRoute = App.ApplicationRoute.extend({
    model: function (params) {
        return this.store.find('recipe');
    }
});

App.CategoryController = Ember.ArrayController.extend({
    queryParams: ['category'],
    category: null,

    moreThanOneFound: function () {
        return this.get('filteredRecipes').length > 1;
    }.property('filteredRecipes'),

    filteredRecipes: function () {
        var category = this.get('category');
        var recipes  = this.get('model');

        if (category && category !== 'all') {
            return recipes.filterBy('category', category);
        } else {
            return recipes;
        }
    }.property('category', 'model')
});
