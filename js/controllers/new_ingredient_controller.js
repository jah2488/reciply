App.NewIngredientController = Ember.Controller.extend({
    actions : {
        save: function () {
            var ingredient  = this.store.createRecord('ingredient', {
                name       : this.get('name'),
                description: this.get('description'),
                imgURL     : this.get('imgURL'),
            });
            ingredient.save();
            this.transitionToRoute('ingredients');
        }
    }
});
