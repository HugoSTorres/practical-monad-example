var Maybe = require('./maybe');

var myString = "Hello";

var myVal = new Maybe(undefined);

myVal.andThen(console.log);

function f(value) {
	return value + 4;
}

function g(value) {
	return value + 5;
}

// Law 1:
new Maybe(42).andThen(f);
f(42);

// Law 2:
myMaybe.andThen(function(value) {
  return new Maybe(value);
});

// Law 3:
myMaybe.andThen(f).andThen(g);
myMaybe.andThen(function(value) {
	return f(value).
		andThen(function(value) {
			return g(value);
		});
	});

