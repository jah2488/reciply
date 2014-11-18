App.Router.map(function() {
    this.route('recipe',         { path: '/recipes/:id'      });
    this.route('edit_recipe',    { path: '/recipes/:id/edit' });
    this.route('new_recipe',     { path: '/recipes/new'      });
    this.route('ingredients',    { path: '/ingredients'      });
    this.route('ingredient',     { path: '/ingredients/:id'  });
    this.route('new_ingredient', { path: '/ingredients/new'  });
});
