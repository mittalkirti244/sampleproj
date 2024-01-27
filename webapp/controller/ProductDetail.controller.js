sap.ui.define([
    "sap/ui/core/mvc/Controller"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.project1.controller.ProductDetail", {

            onInit: function () {
                // debugger;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute('productDetail').attachPatternMatched(this._onRouteMatched, this);

                //this.getRouterInfo().getRoute('productDetail').attachPatternMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function (oEvent) {
                var oData = oEvent.getParameter('arguments').productID;
                console.log('oData', oData)
                sap.m.MessageToast.show(oData);

                // this._product = oEvent.getParameter("arguments").product || this._product || "1";

                // this.getView().bindElement({
                //     path: "/Products?$filter=ProductID eq " + oData,
                //     model: ""
                // });

                console.log('...........');

                const oView = this.getView();
                oView.bindElement({
                    path: "/Products(" + oData + ")",
                    events: {
                        dataRequested: function () {
                            oView.setBusy(true);
                        },
                        dataReceived: function () {
                            oView.setBusy(false);
                        }
                    }
                });
            }
        });
    });