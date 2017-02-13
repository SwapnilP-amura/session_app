var myApp = myApp || {}

myApp.Collection.Sessions = Backbone.Collection.extend({
	model: myApp.Model.Session,
    initialize:function(){
      console.log('initialize : session collection');
    }
	});
