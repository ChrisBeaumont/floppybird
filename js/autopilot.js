var pipe_gap = 90,
	flap_thresh = 0;

function targetHeight() {
	var p = pipes[0];
	if (p === undefined) {
		return ($('#ceiling').offset().top + $('#land').offset().top) / 2;
	}
	p = p.children('.pipe_upper');
	var result = ((p.offset().top + p.height())) + pipe_gap / 2;
	result += pipe_gap / 8;
	return result;
}

function currentHeight() {
	return $('#player').offset().top + $('#player').height() / 2;
}

function flap() {
	$(document).mousedown();
	$(document).trigger('touchstart');
}

function decide() {
	if ((currentHeight() - targetHeight()) > flap_thresh) {
		flap();
	}
}

window.setInterval(decide, 20);