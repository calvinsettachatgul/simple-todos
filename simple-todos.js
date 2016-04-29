// Tasks = new Mongo.Collection("tasks");

// if (Meteor.isClient){

//   Template.body.helpers({
//     tasks: function() {
//       return Tasks.find({}, {sort: {createdAt: -1}});
//     }
//   });

//   //add event handler for form submit

//   Template.body.events({
//     "submit .new-task": function(event){
//       // Prevent default browser for submit
//       event.preventDefault();

//       //get value from form element

//       var text = event.target.text.value;

//       // insert a task into the colleciton

//       Tasks.insert({
//         text: text,
//         createdAt: new Date() // current time
//       });

//       //clear form
//       event.target.text.value = "";
//     }
//   });
// }


// // if (Meteor.isClient){
// //   //this code only runs on the client
// //   Template.body.helpers({
// //     tasks: [
// //       {text: "This is task 1"},
// //       {text: "This is task 2"},
// //       {text: "This is task 3"}
// //     ]
// //   });
// // }
// // if (Meteor.isClient) {
// //   // counter starts at 0
// //   Session.setDefault('counter', 0);

// //   Template.hello.helpers({
// //     counter: function () {
// //       return Session.get('counter');
// //     }
// //   });

// //   Template.hello.events({
// //     'click button': function () {
// //       // increment the counter when button is clicked
// //       Session.set('counter', Session.get('counter') + 1);
// //     }
// //   });
// // }

// // if (Meteor.isServer) {
// //   Meteor.startup(function () {
// //     // code to run on server at startup
// //   });
// // }
