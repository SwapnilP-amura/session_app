myApp = myApp || {}

myApp.View.SessionView = Mn.View.extend({
  template:_.template($('#template-session').html()),
  
  initialize:function(){
  	console.log('initialize: session view');
  }
})
