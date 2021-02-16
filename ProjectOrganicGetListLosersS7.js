function getProjectOrganicGetListLosersS7Schema(){ 
	return {
		id: "ProjectOrganicGetListLosers",
		alias: "Project Organic List Losers",
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
				id: "url_last",
				alias: "url_last",
				dataType: tableau.dataTypeEnum.string
			}, 
			{
				id: "traffic_volume",
				alias: "traffic_volume",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "se_position",
				alias: "se_position",
				dataType: tableau.dataTypeEnum.int
			},
			 
			{
				id: "original_position",
				alias: "original_position",
				dataType: tableau.dataTypeEnum.int
			}
			, 
			{
				id: "trend",
				alias: "trend",
				dataType: tableau.dataTypeEnum.float
			}
			, 
			{
				id: "trend_abs",
				alias: "trend_abs",
				dataType: tableau.dataTypeEnum.float
			}
			, 
			{
				id: "trend_per",
				alias: "trend_per",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "delta_traffic",
				alias: "delta_traffic",
				dataType: tableau.dataTypeEnum.float
			}
		]
	};
}

function transformProjectOrganicGetListLosersS7Data(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"keyword": el.keyword,
			"url": el.url,
			"url_last": el.url_last,
			"traffic_volume": el.traffic_volume,
			"cpc": el.cpc,				
			"se_position": el.se_position,
			"original_position": el.original_position,
			"trend": el.trend.trend,
			"trend_abs": el.trend.abs,
			"trend_per": el.trend.per,
			"delta_traffic": el.delta_traffic
		});
	});
	
	return collectedData;
}

