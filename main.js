var Maybe = require('./maybe');

var myString = "Hello";

var myVal = new Maybe(undefined);

myVal.andThen(console.log);

