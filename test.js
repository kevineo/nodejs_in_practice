var assert = require('assert');
var CountStream = require('./countstream');
var countStream = new CountStream('example');
var fs = require('fs');
var passed = 0;

countStream.on('total', function(count) { //total event will be emitted when the stream is finished
	assert.equal(count, 1); //assert the count is the expected amount
	passed++;
});

fs.createReadStream(__filename).pipe(countStream); //create a readable stream of the current file, & pipe data through CountStream

process.on('exit', function() {
	console.log('Assertions passed:', passed); //before exit - display assertions
});