import { Template } from 'meteor/templating';


// Template.body.helpers({
//   tasks: [
//     { text: 'This is task 1' },
//     { text: 'This is task 2' },
//     { text: 'This is task 3' },
//   ],
// });


// import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';
import './body.html';

// import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({});
    },
});
