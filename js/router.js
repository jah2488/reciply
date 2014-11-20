App.Router.map(function() {
    this.route('recipe',         { path: '/recipes/:id'      }, function () {
        this.route('new_comment');
    });
    this.route('edit_recipe',    { path: '/recipes/:id/edit' });
    this.route('new_recipe',     { path: '/recipes/new'      });

    this.route('ingredients',    { path: '/ingredients'      });
    this.route('ingredient',     { path: '/ingredients/:id'  });
    this.route('new_ingredient', { path: '/ingredients/new'  });

    this.route('category', { path: '/recipes'});

    this.route('login', { path: '/login'});
});
