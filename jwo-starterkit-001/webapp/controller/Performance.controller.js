sap.ui.define([
    "sap/ui/core/mvc/Controller", "stk/jwostarterkit001/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("stk.jwostarterkit001.controller.Performance", {
            formatter: Formatter,

        });
    });
