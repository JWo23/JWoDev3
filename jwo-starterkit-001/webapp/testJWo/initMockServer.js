sap.ui.define([
   "../localServiceJWo/mockserver" 
], function(mockserver) {
    'use strict';

    // init Mock Server
    mockserver.init();
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
    
});