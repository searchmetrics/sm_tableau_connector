function getResearchContentGetListTopUrlsSchema() {
	return {
		id: "ResearchContentGetListTopUrls",
		alias: "Research Content Get List Top Urls",
		columns: [
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			}, 
			{
				id: "keyword_count",
				alias: "keyword_count",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "avg_position",
				alias: "ø position",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "search_volume_total",
				alias: "∑ search volume",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "avg_cpc",
				alias: "ø cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_index_total",
				alias: "∑ traffic index",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_potential_total",
				alias: "∑ traffic potential total",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_index_delta",
				alias: "Δ traffic index",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "seo_value",
				alias: "seo_value",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "seo_value_potential",
				alias: "seo value potential",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "seo_value_delta",
				alias: "Δ seo value",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "title",
				alias: "title",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "social_sum",
				alias: "∑ social media",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "social_fbsh",
				alias: "social facebook",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "social_gp",
				alias: "social google plus",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "backlinks",
				alias: "backlinks",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "refdoms",
				alias: "referred domains",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchContentGetListTopUrlsData(data){
	var collectedData = [];
	var el = data.response;
		
		if (el.length > 0){	
			data.response.map(function(el){
				collectedData.push({
					"url": el.url,
					"keyword_count": el.keyword_count,
					"avg_position": el.avg_position,
					"search_volume_total": el.search_volume_total,
					"avg_cpc": el.avg_cpc,
					"traffic_index_total": el.traffic_index_total,
					"traffic_potential_total": el.traffic_potential_total,
					"traffic_index_delta": el.traffic_index_delta,
					"seo_value": el.seo_value,
					"seo_value_potential": el.seo_value_potential,
					"seo_value_delta": el.seo_value_delta,
					"title": el.title,
					"social_sum": el.social_sum,
					"social_fbsh": el.social_fbsh,
					"social_gp": el.social_gp,
					"backlinks": el.backlinks,
					"refdoms": el.refdoms        
				});
			});
			} else{
				collectedData.push({
					"url": "n/a",
					"keyword_count": "n/a",
					"avg_position": "n/a",
					"search_volume_total": "n/a",
					"avg_cpc": "n/a",
					"traffic_index_total": "n/a",
					"traffic_potential_total": "n/a",
					"traffic_index_delta": "n/a",
					"seo_value": "n/a",
					"seo_value_potential": "n/a",
					"seo_value_delta": "n/a",
					"title": "n/a",
					"social_sum": "n/a",
					"social_fbsh": "n/a",
					"social_gp": "n/a",
					"backlinks": "n/a",
					"refdoms": "n/a"  
					  
					});
		}
	
	return collectedData;
}

