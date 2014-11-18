App.IngredientController = Ember.ObjectController.extend({
    actions: {
        destroy: function () {
            this.get('model').deleteRecord();
            this.get('model').save();
            this.transitionToRoute('index');
        }
    }
});
