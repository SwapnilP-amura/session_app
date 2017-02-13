var myApp = myApp || {}

// relationship attributes are not show without Relational Model
myApp.Model.User = Backbone.RelationalModel.extend({

  defaults:{
    first_name: 'default_first'
  },
  relations: [{type:Backbone.HasMany,key:'sessions',relatedModel:'myApp.Model.Session',reverseRelation:{key:'speaker',includeInJSON: 'id'}}],
  initialize: function(){
    console.log('this is user model');
  }
})
