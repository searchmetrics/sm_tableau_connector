function getResearchContentGetListWinnerUrlsSchema() {
return {
		id: "ResearchContentGetListWinnerUrls",
		alias: "Research Content  List Winners Urls",
		columns: [
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "title",
				alias: "title",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "avg_cpc",
				alias: "avg cpc",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "trend_average_position_trend",
				alias: "trend_average_position trend",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_traffic_index",
				alias: "total_traffic_index",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "delta_traffic_index",
				alias: "delta_traffic_index",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_search_volume",
				alias: "total_search_volume",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_visibility",
				alias: "total_visibility",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "trend_total_visibility_trend",
				alias: "trend_total_visibility_trend",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchContentGetListWinnerUrlsData(data){
	var collectedData = [];

	var el = data.response;
		if (el.length > 0){	
			data.response.map(function(el){
				collectedData.push({
					"url": el.url,
					"title": el.title,
					"avg_cpc": el.average_cpc,
					"trend_average_position_trend": el.trend_average_position.trend,
					"total_traffic_index": el.total_traffic_index,
					"delta_traffic_index": el.delta_traffic_index,
					"total_search_volume": el.total_search_volume,
					"total_visibility": el.total_visibility,
					"trend_total_visibility_trend": el.trend_total_visibility.trend
				});
			});
			
		} else{
				collectedData.push({
					"url": "n/a",
					"title": "n/a",
					"avg_cpc": "n/a",
					"trend_average_position_trend": "n/a",
					"total_traffic_index": "n/a",
					"delta_traffic_index": "n/a",
					"total_search_volume": "n/a",
					"total_visibility": "n/a",
					"trend_total_visibility_trend": "n/a"
				
				});
		}
		
	return collectedData;
}

