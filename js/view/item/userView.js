var myApp = myApp || {}

myApp.View.UserView = Mn.View.extend({
  tagName: 'li',
  template: _.template($('#template-user').html()),
  // this is also works
  // template : '#template-user'

  initialize:function(){
    console.log('initialize : user view');
    this.listenTo(this.model,'change',this.render);
  },

  onRender:function(){
    console.log('onRender : user view')
  },

  ui:{
    delete:'#delete_user',
    show : 'a'
  },

  events:{
    'click @ui.delete':'removeUser',
    'click @ui.show':'showSessions'
  },

  removeUser:function()
  {
    this.model.destroy();
  },
  showSessions:function(e){
    // to prevent change in url by href
    e.preventDefault();
    console.log('User : pressed');
    var cid = this.model.cid
    Backbone.history.navigate('/user/'+cid,{trigger:true});
  }
})
