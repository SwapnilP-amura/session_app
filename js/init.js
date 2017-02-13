myApp = myApp || {}

//initialize app
myApp.App = new App();


// dummy data here
var user1 = new myApp.Model.User({first_name:'swapnil',last_name:'pardeshi'})
var user2 = new myApp.Model.User({first_name:'sumedh',last_name:'Raut'})
var user3 = new myApp.Model.User({first_name:'Kaustubh',last_name:'Nagarnaik'})
var user4 = new myApp.Model.User({first_name:'Neha',last_name:'J'})
var user5 = new myApp.Model.User({first_name:'Piyush',last_name:'Mishra'})

all = [user3,user4,user5]

var session11 = new myApp.Model.Session({title:'android',description:'Basic of android devlopment',speaker:user1, going:all}) 
var session12 = new myApp.Model.Session({title:'android 2',description:'Intermediate of android devlopment',speaker:user1, going:all}) 
var session13 = new myApp.Model.Session({title:'android 3',description:'Advance of android devlopment',speaker:user1, going:all}) 

var session21 = new myApp.Model.Session({title:'Ruby',description:'Ruby procs',speaker:user2}) 
var session22 = new myApp.Model.Session({title:'Ruby Basic',description:'Ruby procs',speaker:user2}) 
var session23 = new myApp.Model.Session({title:'Ruby advanced',description:'Ruby meta programming',speaker:user2}) 

var session31 = new myApp.Model.Session({title:'Rails',description:'Ruby with Rails',speaker:user3}) 
var session32 = new myApp.Model.Session({title:'Rails and backbone',description:'Ruby with Rails',speaker:user3}) 


var session41 = new myApp.Model.Session({title:'Python',description:'Python programming',speaker:user4}) 



myApp.userCollection = new myApp.Collection.Users();
myApp.userCollection.reset([user1,user2,user3,user4,user5]);

myApp.sessionCollection = new myApp.Collection.Sessions();
myApp.sessionCollection.reset([session11,session12,session13,session41])


myApp.App.start();
