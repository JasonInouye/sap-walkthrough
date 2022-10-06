sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel){
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component",{
        metadata : {
            manifest: "json"
        },
        init : function() {
            // call the init function of the parent 
            UIComponent.prototype.init.apply(this, arguments);
            // set the data model
            let oData = {
                recipient: {
                    name: "UI5"
                }
            };
            let oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            let i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallBackLocale: ""
            });
            this.setModel(i18nModel, "i18n")
        }
    })
})