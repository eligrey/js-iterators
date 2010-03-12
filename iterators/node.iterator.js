/*
 * JavaScript Node and NodeList iterator
 * Requires JavaScript 1.7+
 *
 * 2010-03-11
 * 
 * By Elijah Grey, http://eligrey.com
 *
 * License: GNU GPL v3 and the X11/MIT license
 *   See COPYING.md
 */

/*global Node, NodeList*/

"use strict";

NodeList.prototype.__iterator__ = function (flag) {
	var len = this.length,
	item = 0;
	
	for (; item < len; item++) {
		yield flag ? item : this.item(item);
	}
}; 

Node.prototype.__iterator__ = function (flag) {
	return this.childNodes.__iterator__(flag);
};
