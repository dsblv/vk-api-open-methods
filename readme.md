# vk-api-open-methods [![Build Status](https://travis-ci.org/dsblv/vk-api-open-methods.svg?branch=master)](https://travis-ci.org/dsblv/vk-api-open-methods)

> Just a list of VK API (v5.37) [methods](http://vk.com/dev/methods) that don't require authentication.


## Install

```
$ npm install --save vk-api-open-methods
```


## Usage

The module is basically an instance of JavaScript `Array`, so...

```js
var openMethods = require('vk-api-open-methods');
var method = 'friends.get';

if (openMethods.indexOf(method) !== -1)
	console.log('Hurray!');
```


## Related

- [vk-api-all-methods](https://github.com/dsblv/vk-api-all-methods) — List of all VK API methods
- [vk-api-scoped-methods](https://github.com/dsblv/vk-api-scoped-methods) — Hash of VK API methods that require correct scope and scopes they require
- [vk-api-scopes](https://github.com/dsblv/vk-api-scopes) — Hash of VK API access permission codes


## License

MIT © [Dmitriy Sobolev](http://vk.com/sobo13v)
