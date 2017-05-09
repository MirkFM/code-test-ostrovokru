if (typeof Object.assign != 'function') {
	Object.assign = function(target, sources) {
		var to, i, nextSource, nextKey;

		if (target === undefined || target === null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		to = Object(target);

		for (i = 1; i < arguments.length; i++) {
			nextSource = arguments[i];

			if (nextSource === undefined || nextSource === null) {
				continue;
			}

			for (nextKey in nextSource) {
				if ( Object.prototype.hasOwnProperty.call(nextSource, nextKey) ) {
					to[nextKey] = nextSource[nextKey];
				}
			}
		}

		return to;
	};
}

var objectFrom = { b: {c: 4} , d: { e: {f: 1} } };
var objectTo = Object.assign({}, objectFrom);

console.log('objectFrom ', objectFrom);
console.log('objectTo ', objectTo);