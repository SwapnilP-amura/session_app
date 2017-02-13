var myApp = myApp || {}

myApp.RootLayout = Mn.View.extend({
		el: '#todoapp',
		regions: {
			header: '#header',
			main: '#main',
			session:'#sessions',
			footer: '#footer'
		}
	});
