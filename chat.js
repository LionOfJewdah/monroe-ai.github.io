"use strict";


function create_chat_message(message_text) {
	const msg = document.createElement("div");
	msg.className = "container chat_message ";
	const para = document.createElement("p");
	para.innerText = message_text;
	msg.appendChild(para);
	return msg;
}

function prettyDate() {
	const date = new Date();
	return date.toLocaleTimeString(navigator.language, {
		hour: '2-digit',
		minute: '2-digit'
	});
}

function make_time_stamp() {
	const time_stamp = document.createElement("time");
	// const time_stamp = document.createElement("span");
	time_stamp.innerHTML = prettyDate();
	return time_stamp;
}

function make_message_theirs(message_node) {
	message_node.className += " sent_by_bot float-left";
	const time_stamp = make_time_stamp();
	time_stamp.className = "time-left";
	message_node.appendChild(time_stamp);
	return message_node;
}

function make_message_yours(message_node) {
	message_node.className += " sent_by_you darker float-right";
	const time_stamp = make_time_stamp();
	time_stamp.className = "time-right";
	message_node.appendChild(time_stamp);
	return message_node;
}

function create_message_to_send(text_entered) {
	let message_to_post = create_chat_message(text_entered);
	message_to_post = make_message_yours(message_to_post);
	return message_to_post;
}

function add_message_and_scroll(message_element) {
	the_chat.appendChild(message_element);
	the_chat.scrollTo(0, the_chat.scrollHeight);
}

function send_message_to_server(text_entered) {
	//  TODO
	return true;
}

function fetch_message_from_server() {
	// TODO
	return true;
}

function send_message_and_show_it(text_entered) {
	const sent_successfully = send_message_to_server(text_entered);
	/* TODO: make this some status shit about sending to the server*/
	if (sent_successfully) {
		const message_to_post = create_message_to_send(text_entered);
		add_message_and_scroll(message_to_post);
		clear_message();
	}
	return sent_successfully;
}

// TODO: change this to actually get shit from the server
function format_received_message(text_received) {
	let message_to_recv = create_chat_message(text_received);
	message_to_recv = make_message_theirs(message_to_recv);
	return message_to_recv;
}

function show_received_message(message) {
	const message_received = fetch_message_from_server();
	if (message_received) {
		let formatted_message_from_server = format_received_message(message);
		add_message_and_scroll(formatted_message_from_server);
	}
	return message_received;
}

const mona_lisa_text = "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.\" The Mona Lisa is also one of the most valuable paintings in the world. It holds the Guinness World Record for the highest known insurance valuation in history at US$100 million in 1962 (equivalent to $620 million in 2016).";

function add_message(message) {
	send_message_and_show_it(message);
	const milliseconds_delay = 50 * random_int_between(3, 12);
	setTimeout(() => {
		show_received_message(mona_lisa_text);
	}, milliseconds_delay);
}

function clear_message() {
	message_entry_field.value = "";
}
