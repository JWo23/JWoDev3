sap.ui.define([
    "sap/ui/core/mvc/Controller", "stk/jwostarterkit001/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("stk.jwostarterkit001.controller.CustomerDetails", {
            formatter: Formatter,

            onInit: function () { 
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteCustDet").attachPatternMatched(this._PatternMatched, this); 

            }
            ,
          
            _PatternMatched: function(oEvent) {
                this.getView().bindElement(
                {
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID+"')",
                    parameters:{expand: 'Orders, Orders/Employee'} 
                }
                );

            } ,
            onCustDetContactInfo:function(oEvent){
                var oView = this.getView();

                if (!this.byId("idFragCustDetInfContact"))
                {
        
                    this.loadFragment({
                        id: oView.getId(),
                        name: "stk.jwostarterkit001.view.ContactInfoDialog"
                    }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                        oDialog.getEndButton()

 

                    });

                }
                else
                {
                    let i = 2;
 
                };
            },

           
            _onBackToCustListPress:function(oEvent){
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteCustList", "");
            },

            onBtnFrgInfoClose:function(oEvent){

                oEvent.getSource().getParent().close();
            },

           
        });
    });
