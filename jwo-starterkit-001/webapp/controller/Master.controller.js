sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.jwostarterkit001.controller.Master", {
            onInit: function () {          
            },

        
            _onBackToCustListPress:function(oEvent){
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteCustList", "");
            },    


        });
    }
    
    );
