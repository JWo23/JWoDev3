sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller) => {
    "use strict";

    return Controller.extend("stk.jwostarterkit001.controller.ContactInfoDialog", {
        

        onBtnFrgInfoClose() {
            // create dialog lazily
            
        
            this.pDialog.then((oDialog) => oDialog.close());
        }
    });
});