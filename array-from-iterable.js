/*
 * JavaScript Array.fromIterable iterable expander
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

Array.fromIterable = function (iterable, iterKeys) {
	var arr = [],
	// Don't use new Iterator() as it disregards custom iterators
	iter = Iterator(iterable, arguments.length < 2 || iterKeys);
	
	try {
		while (true) {
			arr.push(iter.next());
		}
	} catch (ex if ex instanceof StopIteration) {
		return arr;
	}
};
