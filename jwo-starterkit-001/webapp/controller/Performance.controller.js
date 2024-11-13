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
            
getOrderNumber:function(iv_EmpId){
    var rv_text = "10";
    rv_text = rv_text + iv_EmpId;
    return rv_text;
},
           
            _onBackToCustListPress:function(oEvent){
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteCustList", "");
            },
        });
    });
