Function.prototype.curry = function(){
	var func = this,
		args = [],
		slice = Array.prototype.slice;

	args = args.concat(slice.call(arguments));

	if (func.length <= args.length) {
		return func.apply(this, args);
	} else {
		return function cur(){
			args = args.concat(slice.call(arguments));

			if (func.length > args.length) {
				return cur;
			} else {
				return func.apply(this, args);
			}
		};
	}
};

function abc(a, b, c) {
	return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
	return a + b + c + d + e + f;
}

function assert (a, b) {
	if (a !== b) {
		throw new Error();
	} else {
		console.log('Верно:', b);
	}
}
assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');