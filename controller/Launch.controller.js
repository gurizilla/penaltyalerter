sap.ui.define([
	'jquery.sap.global',
	'sap/ui/model/json/JSONModel',
	'com/gurizilla/PenaltyAlerter/controller/BaseController'
], function(jQuery, JSONModel, BaseController) {
	"use strict";

	var PageController = BaseController.extend("com.gurizilla.PenaltyAlerter.controller.Launch", {

		onNavToAlert: function(oEvent) {
			this.getRouter().navTo("AddAlert");
		},

		onNavToConfig: function(oEvent) {
			this.getRouter().navTo("Config");
		},

		onNavToHistory: function(oEvent) {
			this.getRouter().navTo("AlertHistory");
		}
	});

	return PageController;

});