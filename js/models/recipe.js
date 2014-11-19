App.Recipe = DS.Model.extend({
    title      : DS.attr('string'),
    description: DS.attr('string'),

    markedDescription: function () {
        return marked(this.get('description') || '');
    }.property('description'),

    category   : DS.attr('string'),
    imgURL     : DS.attr('string'),
    items      : DS.attr('string'),//Make this a hasMany later
    steps      : DS.attr('string'),
    rank       : DS.attr('number')
});
