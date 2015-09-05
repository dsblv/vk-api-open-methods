'use strict';
var assert = require('assert');
var vkApiOpenMethods = require('./');

it('should export an array of strings', function () {
	assert(vkApiOpenMethods instanceof Array, 'it really is an array');

	vkApiOpenMethods.forEach(function (method) {
		assert.equal(typeof method, 'string', 'item is a string');
	});
});
