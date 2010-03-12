// Adds support for creating arrays from explicitly iterable objects using Array().

/*jslint white: true, onevar: true, undef: true, nomen: true, eqeqeq: true, bitwise: true,
  regexp: true, strict: true, newcap: true, immed: true, maxlen: 90 */

"use strict";

(function (RealArray) {
	(Array = function (iterable, flag) {
		if (iterable.__iterable__ && iterable.__iterator__) {
			var arr = [],
			gen = iterable.__iterator__(arguments.length < 2 ? true : flag);
			
			try {
				while (true) {
					arr.push(gen.next());
				}
			} catch (ex if ex instanceof StopIteration) {
				return arr;
			}
		} else {
			return RealArray.apply(this, arguments);
		}
	}).prototype = RealArray.prototype;
	
	for (var prop in RealArray) {
		if (Object.prototype.hasOwnProperty.call(RealArray, prop)) {
			Array[prop] = RealArray[prop];
		}
	}
}(Array));
