sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.jwostarterkit001.controller.CustomersList", {
            onInit: function () { 
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteCustList").attachPatternMatched(this._CustListMatched, this); 



            },

            onCustDetPress: function(oEvent){
                
                var sCustId = oEvent.getSource( ).getBindingContext( ).getObject().CustomerID;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteCustDet", {CustomerID: sCustId });
            },

            _onBackToMasterPres:function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteMaster", "");
            },

            _onPerformancePress:function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RoutePerf","");
            },

            _CustListMatched: function(oEvent){
                this.getView().bindElement(
                    {
                        path: ""
                    }
                    );
            }
        
        });
    }

  
    
    );
