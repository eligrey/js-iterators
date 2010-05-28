/*
 * JavaScript Object own properties iterator
 * Requires JavaScript 1.7+
 *
 * 2010-03-11
 * 
 * By Eli Grey, http://eligrey.com
 *
 * License: GNU GPL v3 and the X11/MIT license
 *   See COPYING.md
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
