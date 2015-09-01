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


## License

MIT © [Dmitriy Sobolev](http://vk.com/sobo13v)
