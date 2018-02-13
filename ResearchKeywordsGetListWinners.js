function getResearchKeywordsGetListWinnersSchema() {
 	return {
		id: "ResearchKeywordsGetListWinners",
		alias: "Research Keywords List Winners",
		columns: [
			{
				id: "position",
				alias: "position",
				dataType: tableau.dataTypeEnum.int
			}, 
			{
				id: "trend_position",
				alias: "trend_position",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "position_last",
				alias: "position_last",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "delta_traffic_monthly",
				alias: "delta_traffic_monthly",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "search_volume_monthly",
				alias: "search_volume_monthly",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_monthly",
				alias: "traffic_monthly",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_monthly_last",
				alias: "traffic_monthly_last",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "keyword",
				alias: "keyword",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "search",
				alias: "search",
				dataType: tableau.dataTypeEnum.string
			}
		]
	};
}

 function transformResearchKeywordsGetListWinnersData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"position": el.position,
			"trend_position": el.trend_position,
			"position_last": el.position_last, 
			"delta_traffic_monthly": el.delta_traffic_monthly,
			"search_volume_monthly": el.search_volume_monthly,
			"cpc": el.cpc,
			"traffic_monthly": el.traffic_monthly,
			"traffic_monthly_last": el.traffic_monthly_last, 
			"url": el.url, 
			"keyword": el.keyword,
			"search": el.search              
		});
	});
	
	return collectedData;
}
