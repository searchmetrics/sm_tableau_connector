/*O código está envolvido em uma expressão de função chamada imediatamente para criar um escopo local.
     O objeto tableau não está definido em nosso código, mas na biblioteca WDC. (É atribuído ao escopo global).
     A função makeConnector é um construtor que predefini alguns métodos para o nosso objeto conector.
     As funções getSchema e getData são marcadores por agora, mas conterão a lógica para obter o esquema da tabela dos dados e o download dos dados.
     A função registerConnector valida o objeto conector antes da inicialização.*/


function datacollect() {
    var apicall = document.getElementById('apicall').value;
    var countrycodes = document.getElementById('countrycodes').value;
    var url = document.getElementById('url').value;
    var token = document.getElementById('token').value;
	var date_from = document.getElementById('date_from').value;
	var date_to = document.getElementById('date_to').value;
    
tableau.log(url);
tableau.log(apicall);
tableau.log(countrycodes);
tableau.log(date_from);
tableau.log(date_to);
tableau.log(token);

tableau.connectionData = JSON.stringify({"url":url,"apicall":apicall,"countrycodes":countrycodes, "token":token, "date_from":date_from, "date_to":date_to});
    }

(function () {

     var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) { //The getSchema function takes a schemaCallback parameter which is defined by the WDC API.
      //  tableau.log("Hello WDC!"); //The tableau.log function allows you to pass messages from your connector back to the simulator. These log messages are then printed with the browser’s built-in console.log() function on the simulator page.
     
     //The cols variable contains an array of JavaScript objects, where each object defines a single column in our table. 
     //In this example, there are columns for magnitude, title, and location. Note that for each column you can specify additional options. For example, the alias 
     //defines a friendly name that can appear in Tableau and the columnRole determines whether a field is a measure or a dimension.
      var cols = [
       /*  { 
        id: "id",
        dataType: tableau.dataTypeEnum.string
    },*/ {
        id: "url",
        alias: "url",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "title",
        alias: "title",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "position",
        alias: "position",
        dataType: tableau.dataTypeEnum.int
    },
    {
        id: "page",
        alias: "page",
        dataType: tableau.dataTypeEnum.int
    }];

    var tableSchema = { //The tableSchema variable defines the schema for a single table and contains a JavaScript object. Here, the value of the columns property is set to the cols array defined earlier.
        id: "ResearchRankingKeywordLongtail",
        alias: "Research Rankings Keyword Longtail  ",
        columns: cols
    };

    //The schemaCallback gets called when the schema is defined. The schemaCallback takes an array of table objects. 
    //In this case, there is only table object (the tableSchema object defined above).
    schemaCallback([tableSchema]);
    
    };


    //The getData function takes two parameters: table and doneCallback.
    // The table parameter is an object defined by the WDC to which you can append data.
    //The doneCallback signals to Tableau that you are done getting data.

    myConnector.getData = function (table, doneCallback) {
        //The jQuery $.getJSON function gets earthquake data from the USGS earthquake feed and uses a success handler to store 
        //the returned data in a response parameter (resp). 
        //(You can open the URL in a browser to see what the JSON data looks like.)
        //567b38e3656390958304cc06f1e03ea780d5b4bf
        var data = JSON.parse(tableau.connectionData);
        var url = data['url'];
        var token = data['token'];
        var countrycodes = data['countrycodes'];
        var apicall = data['apicall'];
		var date_from = data['date_from'];
		var date_to = data['date_to'];
	

        var url_json = 'http://api.searchmetrics.com/v3/ResearchOrganicGetListSeoVisibilityHistoric.json?countrycode=' + countrycodes +'&access_token='+ token +'&url='+ url +'&date_from='+ date_from +'&date_to='+ date_to;
        tableau.log(url_json);
        $.getJSON(url_json, function(resp) {
            var feat = resp.response,
                tableData = [];
            //The for loop iterates over the features in the JSON object and stores the data that we want in the tableData array.
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                   // "id": feat[i].id,
                    "visibility": feat[i].[0]
                   
                                                          
                });
            }
            //The table.appendRows function appends (acrescenta) the tableData array to the table as a JavaScript object.
            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

 // tableau.connectionData('TEST');


    $(document).ready(function () { //The jQuery $(document).ready function runs some code when the page loads.
        $("#submitButton").click(function () { //An click event listener is added to the button element created earlier. The button is identified by the submitButton id.
            tableau.connectionName = "Research Rankings Keyword Longtail"; //he tableau.connectionName variable defines what we want to call the connector data source when it is displayed in Tableau.
            tableau.submit(); //The tableau.submit() function sends the connector object to Tableau for validation.
        });
    });
    
})();
