App.RecipeController = Ember.ObjectController.extend({
    itemCount: Ember.computed.alias('splitItems.length'),
    stepCount: Ember.computed.alias('splitSteps.length'),

    showSteps: true,
    showItems: true,

    splitSteps: function () {
        if(this.get('steps')) {
            return (this.get('steps') || '').split(',');
        }
    }.property('steps'),

    splitItems: function () {
        if(this.get('items')) {
            return this.get('items').split(',');
        }
    }.property('items'),

    categoryName: function () {
        var category = App.CATEGORIES.findBy('id', this.get('category'));
        if(category)
            return category.name;
    }.property('category'),

    actions: {
        toggleSteps: function () {
            this.toggleProperty('showSteps');
        },
        toggleItems: function () {
            this.toggleProperty('showItems');
        },
        destroy: function () {
            this.get('model').deleteRecord();
            this.get('model').save();
            this.transitionToRoute('index');
        }
    }
});
