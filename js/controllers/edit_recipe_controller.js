App.EditRecipeController = Ember.ObjectController.extend({

    markedDescription: function () {
        return marked(this.get('description'));
    }.property('description'),

    actions : {
        update: function () {
            this.model.save();
            this.transitionToRoute('recipe', this.get('id'));
        }
    }
});
