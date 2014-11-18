App.Recipe = DS.Model.extend({
    title      : DS.attr('string'),
    description: DS.attr('string'),
    imgURL     : DS.attr('string'),
    items      : DS.attr('string'),//Make this a hasMany later
    steps      : DS.attr('string')
});
