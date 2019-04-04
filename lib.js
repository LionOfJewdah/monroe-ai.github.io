function random_int(range) {
	return parseInt((Math.random() * range, 10));
}

function random_int_between(min, max) {
	const diff = max - min;
	return random_int(diff + 1) + min;
}
