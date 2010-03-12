/*
 * JavaScript Array.fromIterable iterable expander
 * Requires JavaScript 1.7+
 *
 * 2010-03-11
 * 
 * By Elijah Grey, http://eligrey.com
 *
 * License: GNU GPL v3 and the X11/MIT license
 *   See COPYING.md
 */

"use strict";

Array.fromIterable = function (iterable, iterKeys) {
	var arr = [],
	// Don't use new Iterator() as it disregards custom iterators
	iter = Iterator(iterable, arguments.length < 2 ? true : iterKeys);
	
	try {
		while (true) {
			arr.push(iter.next());
		}
	} catch (ex if ex instanceof StopIteration) {
		return arr;
	}
};
