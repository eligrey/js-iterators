/*
 * JavaScript Number iterator
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

Number.prototype.__iterator__ = function (iterKeys) {
	if (this % 1) {
		throw new TypeError("Integer expected for number iterator");
	}
	
	var i = 1 - iterKeys,
	    j = this + i;
	
	if (j < 0) {
		i = j - i + iterKeys;
		j = +iterKeys;
	}
	
	for (; i < j; i++) {
		yield i;
	}
};

/* examples:
 * [i for (i in 5)] is [0,1,2,3,4]
 * [i for each (i in 5)] is [1,2,3,4,5]
 * [i for (i in -5)] is [-4,-3,-2,-1,0]
 * [i for each (i in -5)] is [-5,-4,-3,-2,-1]
 */
