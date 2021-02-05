function datacollect() {
	var collectData = {}; //object
    var formData = $('#apicall').closest('form').serializeArray();
    for (var i = 0; i < formData.length;i++){
		if (formData[i].name === 'apicall'){
			tableau.connectionName = formData[i].value;
		} else {
			collectData[formData[i].name] = formData[i].value;
		}
		
    }

	tableau.connectionData = JSON.stringify({
		params:$.param(collectData)
	});
}

(function () {

    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
		var schema = 'get'+tableau.connectionName+'Schema';
		schemaCallback([eval(schema)()]);
    };

    myConnector.getData = function (table, doneCallback) {
		    var data = JSON.parse(tableau.connectionData);

		    const newParams = processExpressions(data.params);

        var url_json = 'http://api.searchmetrics.com/v3/' + tableau.connectionName + '.json?' + newParams;
        var transform = 'transform' + tableau.connectionName + 'Data';

        $.getJSON(url_json, function(response) {
            table.appendRows(eval(transform)(response));
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.submit();
        });
    });
})();
