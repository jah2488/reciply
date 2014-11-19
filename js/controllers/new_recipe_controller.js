App.NewRecipeController = Ember.Controller.extend({
    actions : {
        save: function () {
            if(!this.get('title')) {
              this.set('errors', 'title can not be blank');
              return;
            }
            if(!this.get('description')) {
              this.set('errors', 'description can not be blank');
              return;
            }
            if(!this.get('steps')) {
              this.set('errors', 'steps can not be blank');
              return;
            }

            var recipe = this.store.createRecord('recipe', {
                title      : this.get('title'),
                description: this.get('description'),
                category   : this.get('category'),
                imgURL     : this.get('imgURL'),
                items      : this.get('items'),
                steps      : this.get('steps')
            });
            recipe.save();
            this.transitionToRoute('index');
        }
    }
});
