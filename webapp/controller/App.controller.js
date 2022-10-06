sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel){
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        onShowHello : function() {
            // read msg from i18n model
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("helloMessage", [sRecipient])
            

            // Toast is hard coded below
            //MessageToast.show("Hello There!", {width: "500em"})

            // show messgae via the i18n file
            MessageToast.show(sMsg);
        }
    });
})