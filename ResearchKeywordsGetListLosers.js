function getResearchKeywordsGetListLosersSchema() {
	return {
		id: "ResearchKeywordsGetListLosers",
		alias: "Research Keywords List Losers",
		columns: [
			{
				id: "keyword",
				alias: "keyword",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			},
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
				id: "search",
				alias: "search",
				dataType: tableau.dataTypeEnum.string
			}
		]
	};
}
	
 function transformResearchKeywordsGetListLosersData(data){
	var collectedData = [];
	var el = data.response;
	
	if (el.length > 0){
		data.response.map(function(el){
			collectedData.push({
				"keyword": el.keyword,
				"url": el.url,
				"position": el.position,
				"trend_position": el.trend_position,
				"position_last": el.position_last, 
				"delta_traffic_monthly": el.delta_traffic_monthly,
				"search_volume_monthly": el.search_volume_monthly,
				"cpc": el.cpc,
				"traffic_monthly": el.traffic_monthly,
				"traffic_monthly_last": el.traffic_monthly_last, 
				"search": el.search              
			});
		});
	} else{
			collectedData.push({
				"keyword": 'n/a',
				"url": 'n/a', 
				"position": 'n/a',
				"trend_position": 'n/a',
				"position_last": 'n/a', 
				"delta_traffic_monthly": 'n/a',
				"search_volume_monthly": 'n/a',
				"cpc": 'n/a',
				"traffic_monthly": 'n/a',
				"traffic_monthly_last": 'n/a', 
				"search": 'n/a'  
			});
	}
	return collectedData;
}

