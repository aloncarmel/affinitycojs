# affinitycojs
A Javascript Wrapper Library for Accessing Affinity.co api

# Usage

var affinitycojs = require('affinitycojs');
var config = { apikey : 'myapikey' };
var affinityclient = new affinitycojs(config);

var mylists = await affinityclient.getAllLists();