var myApp = myApp || {}

myApp.View.UsersView = Mn.CompositeView.extend({
  childView: myApp.View.UserView,
  template:_.template($('#template-users').html()),
  childViewContainer: 'ul#users',
  
  initialize:function(){
    console.log('initialize : user collection view');
    this.listenTo(this.collection,'change',this.render);
  },
  
  onRender:function(){
    console.log('onRender : user collection view')
  },

  ui:{ 
    add: "#add_user",
  },

  events:{
    'click @ui.add':'addUser'
  },

  addUser:function(){
    console.log(this.$el.find('#user_input').val())
    var first_name = this.$el.find('#first_name').val()
    var last_name = this.$el.find('#last_name').val()
    
    if(first_name && last_name){
      var new_user = new myApp.Model.User({first_name:first_name,last_name:last_name})
      myApp.userCollection.add(new_user);
    }
  }
})
