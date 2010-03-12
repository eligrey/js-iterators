/*
 * JavaScript Object own properties iterator
 * Requires JavaScript 1.8+
 *
 * 2010-03-11
 * 
 * By Elijah Grey, http://eligrey.com
 *
 * License: GNU GPL v3 and the X11/MIT license
 *   See COPYING.md
 */

"use strict";

(function () {
	var objProto = Object.prototype,
	hasOwnProp = objProto.hasOwnProperty,
	iterMethod = "__iterator__",
	iterator = function (flag) {
		delete objProto[iterMethod];
		
		for (let prop in this) {
			if (hasOwnProp.call(this, prop)) {
				yield flag ? prop : this[prop];
			}
		}
		
		objProto[iterMethod] = iterator;
	};
	objProto[iterMethod] = iterator;
}());
