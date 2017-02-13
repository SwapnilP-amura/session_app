myApp = myApp || {}

myApp.Controller = Mn.Object.extend({

		initialize: function () {
			console.log('initialize : controller');
			// collection of users
		},
		start: function () {
      console.log('start : controller\n');
			this.showHeader();
			this.showFooter();
		},
    showHeader: function(){
			var header = new myApp.Layout.HeaderLayout()
      myApp.App.root.showChildView('header',header);
			  console.log('showing Header');
    },
		showFooter:function(){
			var footer = new myApp.Layout.FooterLayout()
			myApp.App.root.showChildView('footer',footer);
			console.log('showing Footer');
		},

		//Router actions

		showUsers:function(){
			console.log('action : showUsers');
			var userList = myApp.userCollection;
			var userListView = new myApp.View.UsersView({collection:userList});
			// calls render on userListView and append result to main region
			myApp.App.root.showChildView('main',userListView)
			// console.log(userListView.render().$el[0]);
		},
		showSessions:function(cid){
			console.log('action : showSessions');
			var user = myApp.userCollection.get(cid);
			if (!_.isEmpty(user1)){
				var sessionList = user.get('sessions');
			}
			if(sessionList){
				var sessionListView = new  myApp.View.SessionsView({collection:sessionList})
				myApp.App.root.showChildView('session',sessionListView);
			}
		}

	});
