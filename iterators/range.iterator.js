/*
 * JavaScript Range iterator
 * Requires JavaScript 1.8+
 *
 * 2010-03-11
 * 
 * By Eli Grey, http://eligrey.com
 *
 * License: GNU GPL v3 and the X11/MIT license
 *   See COPYING.md
 */

"use strict";

if (Range) { // Keep a reference to DOM Range if overwritten
	var DOMRange = Range;
}

var Range = function Range (start, stop, step) {
	var args = arguments.length,
	range = this;
	
	if (args !== 0) { // calling with no args should default to zeros
		if (args === 1) {
			stop = start;
			start = 0;
		}
		if (args < 3) {
			if (start > stop) {
				step = -1;
			} else {
				step = 1;
			}
		}
	
		range.start = start;
		range.stop  = stop;
		range.step  = step;
	}
};

Range.prototype = {
	start: 0,
	stop:  0,
	step:  0,
	
	__iterator__: function (iterKeys) {
		var {start, stop, step} = this;
	
		if (iterKeys) { // for..in
			for (; start < stop; start += step) {
				yield start;
			}
		} else { // for each..in
			for (; start <= stop; start += step) {
				yield start;
			}
		}
	},
	toString: function () {
		// U+2026 = ellipsis, U+2192 = right arrow
		return "[range " + this.start + "\u2026" + this.stop + "\u2192" + this.step + "]";
	}
};

/* examples
 * [i for (i in new Range(3))] is [0, 1, 2]
 * [i for each (i in new Range(3))] is [0, 1, 2, 3]
 * [i for (i in new Range(0, 2, .5))] is [0, .5, 1, 1.5]
 * [i for each (i in new Range(0, 2, .5))] is [0, .5, 1, 1.5, 2]
 */
