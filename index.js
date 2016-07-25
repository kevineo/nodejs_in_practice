var CountStream = require('./countstream');
var countStream = new CountStream('wiki');
var http = require('https');
http.get('https://en.wikipedia.org/wiki/Main_Page', function(res) {
res.pipe(countStream);
});
countStream.on('total', function(count) {
console.log('Total matches:', count);
});