'use strict';
var assert = require('assert');
var vkApiOpenMethods = require('./');

it('should export an array', function () {
	assert(vkApiOpenMethods instanceof Array, 'it really is an array');
});
