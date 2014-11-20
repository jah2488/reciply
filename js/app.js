App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//App.ApplicationAdapter = DS.LSAdapter.extend({ namespace: 'reciply' // });//THIS IS THE LOCAL STORAGE ADAPTER SETUP
App.Firebase = new Firebase('https://vivid-torch-2498.firebaseio.com');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: App.Firebase
});

App.CATEGORIES = [
    { id: '1', name: 'Meat'},
    { id: '2', name: 'Fancy'},
    { id: '3', name: 'Dessert'},
    { id: '4', name: 'Morning Foods'}
];


App.RecipeFormComponent = Ember.Component.extend({
    markedDescription: function () {
        return marked((this.get('recipe.description')) || '');
    }.property('recipe.description')
});



