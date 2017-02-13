var myApp = myApp || {}

myApp.Model.Session = Backbone.RelationalModel.extend({
  defaults:{

  	// speaker is given via key (backbone relational)
  	// speaker:'default speaker'
    going: [],
    title:'default title',
    description : 'default description'
  },

  initialize: function(){
    console.log('initialize : session model');
  }

})
