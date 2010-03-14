/*
 * JavaScript XPathResult iterator
 * Requires JavaScript 1.7+
 *
 * 2010-03-11
 * 
 * By Elijah Grey, http://eligrey.com
 *
 * License: GNU GPL v3 and the X11/MIT license
 *   See COPYING.md
 */

/*global XPathResult*/

"use strict";

XPathResult.prototype.__iterator__ = function (iterKeys) {
	var node, i = 0;
	switch (this.resultType) {
		case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
		case XPathResult.ORDERED_NODE_ITERATOR_TYPE:
			while (node = this.iterateNext()) {
				i++;
				yield iterKeys ? i : node;
			}
			break;
		
		case XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE:
		case XPathResult.ORDERED_NODE_SNAPSHOT_TYPE:
			for (node = this.snapshotLength; i < node; i++) {
				yield iterKeys ? i : this.snapshotItem(node);
			}
			break;
	}
	throw StopIteration;
};
