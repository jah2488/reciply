App.EditRecipeController = Ember.ObjectController.extend({
    actions : {
        update: function () {
            this.model.save();
            this.transitionToRoute('recipe', this.get('id'));
        }
    }
});
