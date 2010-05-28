/*
 * JavaScript Node and NodeList iterator
 * Requires JavaScript 1.7+
 *
 * 2010-03-11
 * 
 * By Eli Grey, http://eligrey.com
 *
 * License: GNU GPL v3 and the X11/MIT license
 *   See COPYING.md
 */

/*global Node, NodeList*/

"use strict";

NodeList.prototype.__iterator__ = function (iterKeys) {
	var len = this.length,
	item = 0;
	
	for (; item < len; item++) {
		yield iterKeys ? item : this.item(item);
	}
}; 

Node.prototype.__iterator__ = function (iterKeys) {
	return this.childNodes.__iterator__(iterKeys);
};
