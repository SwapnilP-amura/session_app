var myApp = myApp || {}

myApp.Collection.Users = Backbone.Collection.extend({
		//refer model to store
		model: myApp.Model.User,
    initialize:function(){
      console.log('this is user collection');
    },
	});
