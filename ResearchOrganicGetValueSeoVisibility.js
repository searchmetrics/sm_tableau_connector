function getResearchOrganicGetValueSeoVisibilitySchema() {
	return {
		id: "ResearchOrganicGetValueSeoVisibility",
		alias: "ResearchOrganicGetValueSeoVisibility",
		columns: [
		
			{
				id: "visibility",
				alias: "visibility",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "trend",
				alias: "trend",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "trend_abs",
				alias: "Trend abs",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "trend_per",
				alias: "trend_per",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchOrganicGetValueSeoVisibilityData(data){
	
	var collectedData = [];
	var el = data.response;
//console.log(el);
//	data.response.map(function(el){
	
	if(typeof el !== 'undefined'){
		collectedData.push({
			"visibility": el.visibility,
			"trend": el.trend.trend,
			"trend_abs": el.trend.abs,
			"trend_per": el.trend.per
		});
	//});
		}else{
			collectedData.push({
			"visibility": 'n/a',
			"trend": 'n/a',
			"trend_abs": 'n/a',
			"trend_per": 'n/a'
		});
		};
	return collectedData;
}

