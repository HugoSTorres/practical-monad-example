/**
 * The Maybe monad
 *
 * JavaScript isn't statically typed, so while a monad is really a type, with
 * two functions unit and bind, the unit function is the only way to create an 
 * instance of the object (making it the object's constructor).
 */

// The "unit" function is really just a constructor.
var Maybe = function(value) {
	if (value === undefined) {
		this._value = null;
	} else {
		this._value = value;
	}
};

// We're using "andThen" here because bind is already well defined in JS.
Maybe.prototype.andThen = function(func) {
	var args = Array.prototype.slice.call(arguments);

	if (args.length > 1) {
		if (typeof args[0] !== 'function') {
			console.log(args[0]);
			return;
		}

		if (this._value === null) {
			console.log('in value check');
			return;
		}
		
		return new Maybe(func.call(
			this._value,
			Array.prototype.slice.call(args, 1)
		));
	}

	if (this._value === null) {
		//TODO: handle 'nothing' case
		return new Maybe("This maybe object is undefined").
			andThen(console.log);
	}

	return func.call(null, this._value);
};

module.exports = Maybe;

