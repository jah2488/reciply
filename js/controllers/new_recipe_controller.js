App.NewRecipeController = Ember.Controller.extend({
    actions : {
        save: function () {
            var recipe = this.store.createRecord('recipe', {
                title      : this.get('title'),
                description: this.get('description'),
                imgURL     : this.get('imgURL'),
                items      : this.get('items'),
                steps      : this.get('steps')
            });
            recipe.save();
            this.transitionToRoute('index');
        }
    }
});
