var myApp = myApp || {}

// relationship attributes are not show without Relational Model
myApp.Model.User = Backbone.RelationalModel.extend({

  defaults:{
    first_name: 'default_first'
  },
  relations: [{type:Backbone.HasMany,key:'sessions',relatedModel:'myApp.Model.Session',reverseRelation:{key:'speaker',includeInJSON: 'id'}}],
  

  // if not supplied , default values are passed and validated
  // this is backbones own validate method and call after set attribute or initilize model
  // expected to return string
  // allows instantiation even if model is invalid , but prevents save if invalid
  
  // validate:function(attr){
  // 	if(!attr.first_name)
  // 		return "first name empty"
  // 	if(!attr.last_name)
  // 		return "last name empty"
  // },

  // this is backbone validation library
  // validation hash

  // validation: {
  // 	first_name: {
  // 		required:true,
  // 		msg:'first_name missing'
  // 	},
  // 	last_name: {
  // 		required:true,
  // 		msg:'last_name missing'
  // 	}
  // },
  
  initialize: function(){
    console.log('this is user model');
  }
})
