/*
 * JavaScript Array iterator
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

Array.prototype.__iterator__ = function (flag) {
	var len = this.length,
	item = 0;
	
	for (; item < len; i++) {
		yield flag ? item : this[item];
	}
};
