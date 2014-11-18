App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//App.ApplicationAdapter = DS.LSAdapter.extend({ namespace: 'reciply' // });//THIS IS THE LOCAL STORAGE ADAPTER SETUP
App.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://vivid-torch-2498.firebaseio.com')
});
