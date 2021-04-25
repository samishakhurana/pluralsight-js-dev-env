// This file is not transpiled so must use CommonJS and ES5

// Register babel to transpile before our tests run
require('@babel/register')();

// Disable webpack featires that mocha does not understand like import css
require.extensions['.css'] = function () {};
