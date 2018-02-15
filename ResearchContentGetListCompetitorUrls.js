function getResearchContentGetListCompetitorUrlsSchema() {
	return {
		id: "ResearchContentGetListCompetitorUrls",
		alias: "Research Content List Competitor Urls",
		columns: [
			{
				id: "competitors_url",
				alias: "competitors url",
				dataType: tableau.dataTypeEnum.string
			}, 
			{
				id: "title",
				alias: "title",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "total_avg_position",
				alias: "Total ø position",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_kw_count",
				alias: "∑ keyword count",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_avg_cpc",
				alias: "Total ø cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_traffic_index",
				alias: "∑ traffic index",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_seo_value",
				alias: "∑ seo value",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_avg_seo_value",
				alias: "total_avg_seo_value",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_search_volume",
				alias: "total_search_volume",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_traffic_potential",
				alias: "total_traffic_potential",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_seo_value_potential",
				alias: "total_seo_value_potential",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "comp_kw_count",
				alias: "comp_kw_count",
				dataType: tableau.dataTypeEnum.float
			}
			,
			{
				id: "other_kw_count",
				alias: "other_kw_count",
				dataType: tableau.dataTypeEnum.float
			}
			,
			{
				id: "kw_relevance",
				alias: "kw_relevance",
				dataType: tableau.dataTypeEnum.float
			}
			,
			{
				id: "social_sum",
				alias: "social_sum",
				dataType: tableau.dataTypeEnum.float
			}
			,
			{
				id: "social_fbsh",
				alias: "social_fbsh",
				dataType: tableau.dataTypeEnum.float
			}
			,
			{
				id: "social_gp",
				alias: "social_gp",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "backlinks",
				alias: "backlinks",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "refdoms",
				alias: "refdoms",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_url",
				alias: "own url",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "own_title",
				alias: "own title",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "own_total_avg_position",
				alias: "own total_avg_position",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_kw_count",
				alias: "own_total_kw_count",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_avg_cpc",
				alias: "own total_avg_cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_traffic_index",
				alias: "own_total_traffic_index",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_seo_value",
				alias: "own_total_seo_value",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_avg_seo_value",
				alias: "own_total_avg_seo_value",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_search_volume",
				alias: "own_total_search_volume",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_traffic_potential",
				alias: "own_total_traffic_potential",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_seo_value_potential",
				alias: "own_total_seo_value_potential",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_backlinks",
				alias: "own_backlinks",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_refdoms",
				alias: "own_refdoms",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_backlinks_max",
				alias: "own_backlinks_max",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_refdoms_max",
				alias: "own_refdoms_max",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_social_tw",
				alias: "own_social_tw",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_social_gp",
				alias: "own_social_gp",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_social_fbsh",
				alias: "own_social_fbsh",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_social_sum",
				alias: "own_social_sum",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "own_total_kw_max",
				alias: "total_kw_max",
				dataType: tableau.dataTypeEnum.float
			}
			
			
		]
	};
}

function transformResearchContentGetListCompetitorUrlsData(data){
	var	el = data.response;
	var collectedData = [],
	_this = this;
	
	if (el.length > 0){	
		
		for (var i = 0, len = el.competitors.length; i < len; i++) {
				collectedData.push({
				   
					"competitors_url": el.competitors[i].url,
					"title": el.competitors[i].title,
					"total_avg_position": el.competitors[i].total_avg_position,
					"total_kw_count": el.competitors[i].total_kw_count,
					"total_avg_cpc": el.competitors[i].total_avg_cpc,
					"total_traffic_index": el.competitors[i].total_traffic_index,
					"total_seo_value": el.competitors[i].total_seo_value,
					"total_avg_seo_value": el.competitors[i].total_avg_seo_value,
					"total_search_volume": el.competitors[i].total_search_volume,
					"total_traffic_potential": el.competitors[i].total_traffic_potential,
					"total_seo_value_potential": el.competitors[i].total_seo_value_potential,
					"comp_kw_count": el.competitors[i].comp_kw_count,
					"other_kw_count": el.competitors[i].other_kw_count,
					"kw_relevance": el.competitors[i].kw_relevance,
					"social_sum": el.competitors[i].social_sum,
					"social_fbsh": el.competitors[i].social_fbsh,
					"social_gp": el.competitors[i].social_gp,
					"backlinks": el.competitors[i].backlinks,
					"refdoms": el.competitors[i].refdoms,
					"own_url": el.own.url,
					"own_title": el.own.title,
					"own_total_avg_position": el.own.total_avg_position,
					"own_total_kw_count": el.own.total_kw_count,
					"own_total_avg_cpc": el.own.total_avg_cpc,
					"own_total_traffic_index": el.own.total_traffic_index,
					"own_total_seo_value": el.own.total_seo_value,
					"own_total_avg_seo_value": el.own.total_avg_seo_value,
					"own_total_search_volume": el.own.total_search_volume,
					"own_total_traffic_potential": el.own.total_traffic_potential,
					"own_total_seo_value_potential": el.own.total_seo_value_potential,
					"own_backlinks": el.own.backlinks,
					"own_refdoms": el.own.refdoms,
					"own_backlinks_max": el.own.backlinks_max,
					"own_refdoms_max": el.own.refdoms_max,
					"own_social_tw": el.own.social_tw,
					"own_refdoms": el.own.refdoms,
					"own_social_tw": el.own.social_tw,
					"own_social_gp": el.own.social_gp,
					"own_social_fbsh": el.own.social_fbsh,
					"own_social_sum": el.own.social_sum,
					"total_kw_max": el.own.total_kw_max
													   
				});
			};
			} else{
				collectedData.push({
					"competitors_url": "n/a",
					"title": "n/a",
					"total_avg_position": "n/a",
					"total_kw_count": "n/a",
					"total_avg_cpc": "n/a",
					"total_traffic_index": "n/a",
					"total_seo_value": "n/a",
					"total_avg_seo_value": "n/a",
					"total_search_volume": "n/a",
					"total_traffic_potential": "n/a",
					"total_seo_value_potential": "n/a" ,
					"comp_kw_count": "n/a" ,
					"other_kw_count": "n/a" ,
					"kw_relevance": "n/a" ,
					"social_sum": "n/a" ,
					"social_fbsh": "n/a" ,
					"social_gp": "n/a" ,
					"backlinks": "n/a" ,
					"refdoms": "n/a" ,
					"own_url": "n/a" ,
					"own_title": "n/a" ,
					"own_total_avg_position": "n/a" ,
					"own_total_kw_count": "n/a" ,
					"own_total_avg_cpc": "n/a" ,
					"own_total_traffic_index": "n/a" ,
					"own_total_seo_value": "n/a" ,
					"own_total_avg_seo_value": "n/a" ,
					"own_total_search_volume": "n/a" ,
					"own_total_traffic_potential": "n/a" ,
					"own_total_seo_value_potential": "n/a" ,
					"own_backlinks": "n/a" ,
					"own_refdoms": "n/a" ,
					"own_backlinks_max": "n/a" ,
					"own_refdoms_max": "n/a" ,
					"own_social_tw": "n/a" ,
					"own_refdoms": "n/a" ,
					"own_social_tw": "n/a" ,
					"own_social_gp": "n/a" ,
					"own_social_fbsh": "n/a" ,
					"own_social_sum":"n/a" ,
					"total_kw_max": "n/a"   
					});
		}

	return collectedData;
}
	
	


