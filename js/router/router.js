var myApp = myApp || {}
myApp.Router = Mn.AppRouter.extend({
  appRoutes: {
    'users': 'showUsers',
    'user/:cid':'showSessions'
  }
});
