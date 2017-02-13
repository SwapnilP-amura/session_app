myApp = myApp || {}

myApp.View.SessionsView = Mn.CompositeView.extend({
  template:_.template($('#template-sessions').html()),
  childView : myApp.View.SessionView,
  childViewContainer:'ul#sessions',
  initialize:function(){
  	console.log('initialize: session composite  view');
  }
})
