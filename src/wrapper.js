var virtualize = require('vdom-virtualize');

Elm.Native.VDomVirtualize = {};
Elm.Native.VDomVirtualize.make = function (elm) {
	elm.Native = elm.Native || {};
	elm.Native.VDomVirtualize = elm.Native.VDomVirtualize || {};

	if (elm.Native.VDomVirtualize.values)
		return elm.Native.VDomVirtualize.values;

	function fromString (string) {
		return virtualize.fromHTML(string);
	}

	return elm.Native.VDomVirtualize.values
		= Elm.Native.VDomVirtualize.values = {
			fromString: fromString
		};
};