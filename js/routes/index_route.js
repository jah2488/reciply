App.IndexRoute = App.ApplicationRoute.extend({
    model: function () {
        return this.store.find('recipe');
    }
});

App.IndexController = Ember.ArrayController.extend({
    sortProperties: ['rank', 'title'],
    sortAscending: false,
    actions: {
        sortToggle: function (prop) {
            if(prop == 'title') {
                this.set('sortProperties', ['title', 'rank']);//needs to be an array. sooo stupid
            } else {
                this.set('sortProperties', ['rank', 'title']);//needs to be an array. sooo stupid
            }
            this.set('sortAscending', !this.get('sortAscending'));
        },

        upvote: function (recipe) {
            recipe.incrementProperty('rank');
            recipe.save();
        },

        downvote: function (recipe) {
            recipe.decrementProperty('rank');
            recipe.save();
        }

    }
});
