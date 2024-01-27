sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("ns.project1.controller.View1", {

            onShowHello: function () {
                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                // show message
                MessageToast.show(sMsg);
            },

            onPressItem() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("productDetail", {
                    "productID": "1"
                });
            }
        });
    });
