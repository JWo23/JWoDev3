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
            
getOrderNumber:function( ){
    var rv_text = "00";

    return rv_text;
},
           

            onMotivate:function( oEvent ){
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail =  oEmployee.FirstName +"." + oEmployee.LastName + "@capgemini.com";
                sEmail = "jaroslaw.wozniak@capgemini.com";
                var sSubject = "Good Job" ;
                var sBody  = " Dzieki za dobra prace";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody, );

            },

            _onBackToCustListPress:function(oEvent){
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteCustList", "");
            },
        });
    });
