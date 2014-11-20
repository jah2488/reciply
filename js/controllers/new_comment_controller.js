App.RecipeNewCommentController = Ember.ObjectController.extend({
    markedText: function () {
        return marked(this.get('text') || '');
    }.property('text'),

    needs: ['recipe'],
    actions : {
        save: function () {
            if (!this.get('text')) { return; }//Do Nothing if text field is blank;
            var comment = this.store.createRecord('comment', {
                name: this.get('name'),
                date: (new Date()).toDateString(),
                text: this.get('text')
            });
            comment.save();

            var recipe = this.get('controllers.recipe.model');
            recipe.get('comments').pushObject(comment);
            recipe.save();

            this.transitionToRoute('recipe', recipe.id);
        }
    }
});
