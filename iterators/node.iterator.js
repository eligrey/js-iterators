/*
 * JavaScript Node and NodeList iterator
 * Requires JavaScript 1.7+
 *
 * 2010-03-11
 * 
 * By Eli Grey, http://eligrey.com
 *
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
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
