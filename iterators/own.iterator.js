/*
 * JavaScript Object own properties iterator
 * Requires JavaScript 1.7+
 *
 * 2010-03-11
 * 
 * By Eli Grey, http://eligrey.com
 *
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

"use strict";

Object.prototype.__iterator__ = function (iterKeys) {
	var iter = new Iterator(this, true),
	prop;
	
	try {
		while (true) {
			prop = iter.next();
			if (Object.prototype.hasOwnProperty.call(this, prop)) {
				yield iterKeys ? prop : this[prop];
			}
		}
	} catch (ex if ex instanceof StopIteration) {}
};
