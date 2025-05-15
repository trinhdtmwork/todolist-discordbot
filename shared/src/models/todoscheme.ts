import { Schema } from 'mongoose';

export default new Schema({
	_id: String,
	guildid: String,
	title: String,
	content: String,
	tasks: Array,
	attachlink: String,
	submittedby: String,
	timestamp: String,
	time_started: String,
	time_finished: String,
	state: String,
	severity: Number,
	loop: Boolean,
	// if this is true we have to update the message in the read only channel as well
	shared: Boolean,
	todomsg: String,
	todochannel: String,
	readonlymessage: String,
	readonlychannel: String,
	assigned: Array,
	category: String,
});
