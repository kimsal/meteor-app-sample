import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './../imports/index.html';

import { Mongo } from 'meteor/mongo'
const  Member = new Mongo.Collection('members');

Template.addTask.events({
	"submit .new-member": function(event) {
		try{
			event.preventDefault();
			
			var  email = event.target.email.value;
			var password = event.target.password.value;
			
			Member.insert({ 
				email      : email,
				password   : password, 
				created_at: new Date(),
			});
			console.log(email,password);
			return false;
		}catch(err) {
			console.log('error',err);
			return false;
		}
		return false;
	},
});

