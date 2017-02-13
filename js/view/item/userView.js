var myApp = myApp || {}

myApp.View.UserView = Mn.View.extend({
  tagName: 'li',
  template: _.template($('#template-user').html()),
  // this is also works
  // template : '#template-user'

  initialize:function(){
    console.log('initialize : user view');
    
    //Below binidng is automatic in marionette 
    // this.on('onRender',this.onRender,this);

    // below binds model changes to ui
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
    // automatically removed from collection
    // triggers remove on collection as well
    this.model.destroy();
  },
  showSessions:function(e){
    // to prevent change in url by href
    e.preventDefault();
    console.log('User : pressed');
    // changing route doesnt close existing views
    // action triggered and code executed in that action
    // views dont close automatically
    var cid = this.model.cid
    Backbone.history.navigate('/user/'+cid,{trigger:true});
  }

  // works even if following render function is commented
  // because it renders using implicit render
  // implicit rendering triggers 'onRender' after rendering

  // if you define your own render()
  // trigger onRender() or it wont be called
  // onRender is hook to write code after rendering
  // and should be triggered after each render

  // render:function()
  // {
  //   this.$el.html(this.template(this.model.toJSON()))
  //   this.trigger('onRender');
  //   return this
  // }
})
