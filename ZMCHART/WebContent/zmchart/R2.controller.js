sap.ui.controller("zmchart.R2", {
	 getMyModel: function(a1,a2,a3) {
         var data1 = [ {
                                      type : "New",
                                      tickets : a1
                            }, {
                                      type : "Assigned",
                                      tickets : a2
                            }, {
                                      type : "WIP",
                                      tickets : a3
                            } ];
         var data = [{
        	 			accd: "CAR-EXP", 
        	 			tot: 45.88
        	 		},{
			        	accd: "OTHER-EXP",
			        	tot: 93			        	 
        	 		}];
         
         var model = new sap.ui.model.json.JSONModel();
         model.setData(data);

         //return model;
         
        // var oModel1 = new sap.ui.model.odata.ODataModel('http://www.patelashish.com/Apps/MyExpT/MonthJSON.asp', true);
         return model;
},

createMyChart: function(id, title, model) {

         var oChart = new sap.makit.Chart({
                   width : "100%",
                   height: "70%",
                   type : sap.makit.ChartType.Donut,
                   showRangeSelector : false,
                   showTotalValue : true,
                   valueAxis: new sap.makit.ValueAxis({}),
                   categoryAxis: new sap.makit.CategoryAxis({}),
                   category : new sap.makit.Category({
                            column : "accd"
                   }),
                   values : [new sap.makit.Value({
                            expression : "tot",
                            format : "number"
                   })]
         });
         oChart.addColumn(new sap.makit.Column({name:"Account", value:"{accd}"}));
         oChart.addColumn(new sap.makit.Column({name:"Amount", value:"{tot}", type:"number"}));
         oChart.setModel(model);
         oChart.bindRows("/");

         return oChart;

}
});