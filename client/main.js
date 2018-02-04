import { Template } from 'meteor/templating';
import './main.html';
import { Notes } from '../lib/collections.js';

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

		// insert note into collection
		Notes.insert({
			text,
			createdAt: new Date()
		});

		// clear form
		target.text.value = '';

		//close modal
		$('#addModal').modal('close');

		return false;
	}
})



