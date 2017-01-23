'use strict';

/**
 * The Delegate class lets you run a function in a specific scope.
 * It is very useful when you need a 3rd party code (ex. jQuery) to call function a public method of an object in a way
 * that the object's 'this' scope is retained.
 */

/**
 * Creates an instance of the Delegate class
 * @constructor
 */
var Delegate = function(){};

/**
 * Creates a closure wrapper over the function
 * @param scopeObject - scope of function/object that we want to operate in
 * @param functionRef - reference to the function that will be called
 * @param funcArgsArray - [optional] arguments to be passed to the function from the reference
 */
Delegate.prototype.create = function(scopeObject, functionRef, funcArgsArray){
  return (function(scope, fn, argsArray){
    return function(){
      var args = Array.prototype.slice.call(arguments);
      if(argsArray){
        args = args.concat(argsArray);
      }
      fn.apply(scope, args);
    }
  })(scopeObject, functionRef, funcArgsArray);
};

exports = new Delegate();
