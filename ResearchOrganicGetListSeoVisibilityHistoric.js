function getResearchOrganicGetListSeoVisibilityHistoricSchema() {
	return {
		id: "ResearchOrganicGetListSeoVisibilityHistoric",
		alias: "Research Organic List Seo Visibility Historic",
		columns: [
		
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "date",
				alias: "date__",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "visibility",
				alias: "visibility",
				dataType: tableau.dataTypeEnum.int
			}
		]
	};
}

/*function transformResearchOrganicGetListSeoVisibilityHistoricData(data){
	var collectedData = [];
	var el = data.response;
	var url_json = Object.keys(el);

	
	//console.log('ARRAY:', el);
	
/*	for (let key in el[Object.keys(el)]) {
			datum = key;
			visibility = [];
			console.log('date:', key);
			console.log('Searchvolume:', el[Object.keys(el)][key]);
			}*/
		

 //console.log(Object.keys(el));
			
	/*	for (let key in el[Object.keys(el)]) {
		collectedData.push({
				
				"url": Object.keys(el),	
				"date":key,
				"visibility":el[Object.keys(el)][key]
		
		});
		};
	
	
	return collectedData;
}*/

function transformResearchOrganicGetListSeoVisibilityHistoricData(input){
    var collectedData = [];
    var data = input.response;
    var urls = Object.keys(data);
     
   urls.forEach(url => {
     const datesArray = Object.entries(data[url]);
     console.log(datesArray)
     datesArray.forEach(([date, vis]) => {
       collectedData.push({
         url,
         visbility: vis,
         date,
       })
     })
   })
  return collectedData;
   
}
