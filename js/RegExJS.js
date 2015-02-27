(function (scope) {
	"use strict";

	var s = {};

	s.match = function (regex, str, callback) {
		var matches = [];
		var error = null;
		var match = null;
		var index = null;

		if (!regex) {
			callback(error, matches);
			return;
		}

		while (!error) {
			match = regex.exec(str);
			if (!match) { break; }
			if (regex.global && index === regex.lastIndex) {
				error = "infinite";
				break;
			}
			match.end = (index = match.index + match[0].length) - 1;
			match.input = null;
			matches.push(match);
			if (!regex.global) { break; } // or it will become infinite.
		}
		callback(error, matches);
	};

	scope.RegExJS = s;

}(window));
