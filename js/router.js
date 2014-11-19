App.Router.map(function() {
    this.route('recipe',         { path: '/recipes/:id'      });
    this.route('edit_recipe',    { path: '/recipes/:id/edit' });
    this.route('new_recipe',     { path: '/recipes/new'      });

    this.route('ingredients',    { path: '/ingredients'      });
    this.route('ingredient',     { path: '/ingredients/:id'  });
    this.route('new_ingredient', { path: '/ingredients/new'  });

    this.route('category', { path: '/recipes'});

    this.route('login', { path: '/login'});
});

App.ApplicationController = Ember.Controller.extend({
    // used to show, or not show, the log out button
    isLoggedIn: false,
    // when a user enters the app unauthenticated, the transition
    // to where they are going is saved off so it can be retried
    // when they have logged in.
    savedTransition: null,

    login: function() {
      this.setProperties({ savedTransition: null, isLoggedIn: true });
    },

    logout: function() {
      this.set('isLoggedIn', false);
    }
});
