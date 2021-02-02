function getProjectOrganicGetListMarketShareS7Schema(){ 
	return {
		id: "MarketShareHistoric",
		alias: "Market Share Historic",
		columns: [
			{
				id: "date",
				alias: "date",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "marketshare",
				alias: "marketshare",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			}
		]
	};
}
	
function transformProjectOrganicGetListMarketShareS7Data(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"date": el.date,
			"domain": el.data[0].domain,
			"sum_visibility": el.data[0].marketshare,
			"count_keywords": el.data[0].url 
		});
	});

	return collectedData;
}

