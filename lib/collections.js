import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');

Meteor.methods({
	'notes.insert'(text){
		check(text, String);

		// check if user logged in
		if (!Meteor.user()){
			throw new Meteor.Error('not-authorised');
		}

		// insert note into collection
		Notes.insert({
			text,
			createdAt: new Date(),
			owner: Meteor.user(),
			username: Meteor.user().username,
		});
	},

	'notes.remove'(note){
		check(note._id, String);

		if(note.owner !== Meteor.user()){
			throw new Meteor.Error('Sorry, you cannot delete this');
		}

		Notes.remove(note._id);
	}
});