sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
    

    ], 
    function ( MockServer, UriParameters ) 
    {
        "use strict";
        return {

        init: function(){

            const oMockServer = new MockServer({
              //  rootUri: sap.ui.require.toUrl("stk.jwostarterkit001"+ "/V2/Northwind/Northwind.svc/" )
                rootUri: "/V2/Northwind/Northwind.svc/" 

            });

            const oUriParameters = new UriParameters(window.location.href);

            // config MockServer
            /** 
            oMockServer.config({
                autoRespond: true,
                autoResponseAfter: oUriParameters.get("serverDelay") || 500
            })
            */

            //const sPath = sap.ui.require.toUrl("stk.jwostarterkit001");
            const sPath = "../localServiceJWo"

            oMockServer.simulate(sPath+"/metadata.xml", sPath+ "/mockdata")

            try{
                oMockServer.start();

            } catch(error){
                console.error("Error starting MockServer");
                }


        } 

    }

    });