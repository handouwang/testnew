var _ = require('lodash');

console.log(_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }))
// → { 'a': 1, 'b': 2, 'c': 3 }
_.map([1, 2, 3], function(n) { return n * 3; });
// → [3, 6, 9]