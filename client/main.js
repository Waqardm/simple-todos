import { Template } from 'meteor/templating';
import './main.html';
import { Notes } from '../lib/collections.js';

import { Accounts } from 'meteor/accounts-base';

//Accounts config

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

Template.body.helpers({
  
  notes(){
  	return Notes.find({})
  }

});

Template.add.events({
	'submit .add-form': function(){
		event.preventDefault();

		// get input value
		const target = event.target;
		const text = target.text.value;

		Meteor.call('notes.insert', text);

		// clear form
		target.text.value = '';

		//close modal
		$('#addModal').modal('close');

		return false;
	}
}),

Template.note.events({
	'submit .update-form': function(){
		event.preventDefault();

		// get input value
		const target = event.target;
		const text = target.text.value;

		Meteor.call('notes.insert', text);

		// clear form
		target.text.value = 'target';

		//close modal
		$('#editModal').modal('close');

		return false;
	}
}),

Template.note.events({

	'click .delete-note': function () {
		//Notes.remove(this._id);
		Meteor.call('notes.remove', this);
		return false;
	}
});





