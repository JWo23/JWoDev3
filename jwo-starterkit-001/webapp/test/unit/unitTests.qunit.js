/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"stk/jwo-starterkit-001/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
