'use strict';

var button = $('#enterName');
var input = $('#name');
var greetings = $('#congrats');

button.on('click', enterName);

function enterName() {
	greetings.empty();
	greetings.append('Labas, ' + input.val());
}