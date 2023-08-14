//@ui5-bundle escalationsefe/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"escalationsefe/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("escalationsefe.Component",{metadata:{manifest:"json"}})});
},
	"escalationsefe/i18n/i18n.properties":'# This is the resource bundle for escalationsefe\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Escalations Application\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"escalationsefe/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"escalationsefe","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.10.4","toolsId":"d89b7609-e347-4bb6-a549-a2f475151dba"},"dataSources":{"mainService":{"uri":"odata/v4/escalation-management/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.117.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"escalationsefe.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"EscalationsList","target":"EscalationsList"},{"pattern":"Escalations({key}):?query:","name":"EscalationsObjectPage","target":"EscalationsObjectPage"},{"pattern":"Escalations({key})/comments({key2}):?query:","name":"CommentsObjectPage","target":"CommentsObjectPage"}],"targets":{"EscalationsList":{"type":"Component","id":"EscalationsList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Escalations","variantManagement":"Page","navigation":{"Escalations":{"detail":{"route":"EscalationsObjectPage"}}}}}},"EscalationsObjectPage":{"type":"Component","id":"EscalationsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Escalations","navigation":{"comments":{"detail":{"route":"CommentsObjectPage"}}}}}},"CommentsObjectPage":{"type":"Component","id":"CommentsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Comments"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
