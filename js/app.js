var myApp = myApp || {}

    // define app
    var App = Mn.Application.extend({
      setRootLayout: function () {
        console.log('onBeforeStart callback..')
        console.log("Setting root layout");
        this.root = new myApp.RootLayout();
      },
      onBeforeStart:function(){
        this.setRootLayout();
      },
      onStart:function(){
        console.log('started...')
        var controller = new myApp.Controller();
        controller.router = new myApp.Router({
          controller: controller
        });
        controller.start();
        Backbone.history.start();
      }
    });

    
