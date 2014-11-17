App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//App.ApplicationAdapter = DS.LSAdapter.extend({
//    namespace: 'reciply'
//});//THIS IS THE LOCAL STORAGE ADAPTER SETUP
App.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://vivid-torch-2498.firebaseio.com/')
});

App.Router.map(function() {
    this.route('recipe',      { path: '/recipes/:id'     });
    this.route('edit_recipe', { path: '/recipes/:id/edit'});
    this.route('new_recipe',  { path: '/recipes/new'     });
});

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

App.EditRecipeRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('recipe', params.id);
    }
});

App.EditRecipeController = Ember.ObjectController.extend({
    actions : {
        update: function () {
            this.model.save();
            this.transitionToRoute('recipe', this.get('id'));
        }
    }
});

App.RecipeRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('recipe', params.id);
    }
});

App.RecipeController = Ember.ObjectController.extend({
    itemCount: Ember.computed.alias('splitItems.length'),
    stepCount: Ember.computed.alias('splitSteps.length'),

    showSteps: true,
    showItems: true,

    splitSteps: function () {
        return this.get('steps').split(',');
    }.property('steps'),

    splitItems: function () {
        return this.get('items').split(',');
    }.property('items'),

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

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('recipe');
    }
});

App.Recipe = DS.Model.extend({
    title      : DS.attr('string'),
    description: DS.attr('string'),
    imgURL     : DS.attr('string'),
    items      : DS.attr('string'),//Make this a hasMany later
    steps      : DS.attr('string')// Make this a hasMany later
});
