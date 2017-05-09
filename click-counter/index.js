function Panel() {
	this.counter = 0;
}

Panel.prototype.init = function(element) {
	var self = this;

	element.addEventListener("click", function() {
		self.counter += 1;

		document.querySelector('.' + element.className + '-counter').innerHTML = self.counter;
	}, false);
};


function main () {
	var panelsElements = document.querySelector('.wrapper');
	[].slice.apply(panelsElements.children).forEach(function (panelElement) {
		var panel = new Panel();
		panel.init(panelElement);
	});
}

window.onload = main;