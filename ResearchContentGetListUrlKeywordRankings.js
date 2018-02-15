function getResearchContentGetListUrlKeywordRankingsSchema() {
	return {
		id: "ResearchContentGetListUrlKeywordRankings",
		alias: "Research Content Url keyword Rankings",
		columns: [			
			{
				id: "keyword",
				alias: "keyword",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "position",
				alias: "position",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "search_volume",
				alias: "search_volume",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_index",
				alias: "traffic_index",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_potential",
				alias: "traffic_potential",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "tix_delta",
				alias: "tix_delta",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "seo_value",
				alias: "seo_value",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "seo_value_potential",
				alias: "seo_value_potential",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "seva_delta",
				alias: "seva_delta",
				dataType: tableau.dataTypeEnum.float
			},
			
			{
				id: "similiar_keyword_1",
				alias: "Similiar keyword 1",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "similar_position_1",
				alias: "Similiar position keyword 1",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "similiar_search_volume_1",
				alias: "Search volume keyword 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_cpc_1",
				alias: "Similiar CPC keyword 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_index_1",
				alias: "Similiar traffic index 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_potential_1",
				alias: "Similiar traffic potential 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_tix_delta_1",
				alias: "Similiar tix delta 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_1",
				alias: "Similiar seo value 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_potential_1",
				alias: "Similiar seo value potential 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seva_delta_1",
				alias: "Similiar seva delta 1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_keyword_2",
				alias: "Similiar keyword 2",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "similar_position_2",
				alias: "Similiar position keyword 2",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "similiar_search_volume_2",
				alias: "Search volume keyword 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_cpc_2",
				alias: "Similiar CPC keyword 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_index_2",
				alias: "Similiar traffic index 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_potential_2",
				alias: "Similiar traffic potential 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_tix_delta_2",
				alias: "Similiar tix delta 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_2",
				alias: "Similiar seo value 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_potential_2",
				alias: "Similiar seo value potential 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seva_delta_2",
				alias: "Similiar seva delta 2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_keyword_3",
				alias: "Similiar keyword 3",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "similar_position_3",
				alias: "Similiar position keyword 3",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "similiar_search_volume_3",
				alias: "Search volume keyword 3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_cpc_3",
				alias: "Similiar CPC Keyword3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_index_3",
				alias: "Similiar traffic index 3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_potential_3",
				alias: "Similiar traffic potential 3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_tix_delta_3",
				alias: "Similiar tix delta 3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_3",
				alias: "Similiar seo value 3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_potential_3",
				alias: "Similiar seo value potential 3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seva_delta_3",
				alias: "Similiar seva delta 3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_keyword_4",
				alias: "Similiar keyword 4",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "similar_position_4",
				alias: "Similiar position keyword 4",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "similiar_search_volume_4",
				alias: "Search volume keyword 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_cpc_4",
				alias: "Similiar CPC 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_index_4",
				alias: "Similiar traffic index 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_potential_4",
				alias: "Similiar traffic potential 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_tix_delta_4",
				alias: "Similiar tix delta 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_4",
				alias: "Similiar seo value 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_potential_4",
				alias: "Similiar seo value potential 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seva_delta_4",
				alias: "Similiar seva delta 4",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_keyword_5",
				alias: "Similiar keyword 5",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "similar_position_5",
				alias: "Similiar position keyword 5",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "similiar_search_volume_5",
				alias: "Search volume keyword 5",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_cpc_5",
				alias: "Similiar CPC 5",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_index_5",
				alias: "Similiar traffic index 5",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_traffic_potential_5",
				alias: "Similiar traffic potential 5",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_tix_delta_5",
				alias: "Similiar tix delta 5",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_5",
				alias: "Similiar seo value 5",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seo_value_potential_5",
				alias: "Similiar seo value potential 5",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "similiar_seva_delta_5",
				alias: "Similiar seva delta 5",
				dataType: tableau.dataTypeEnum.float
			}
		]
	};
}

function transformResearchContentGetListUrlKeywordRankingsData(data){
	var collectedData = [];
	var el = data.response;
	console.log(el);
	
		if (el.length > 0){
	
			data.response.map(function(el){
				collectedData.push({
					"keyword": el.keyword,
					"position": el.position,
					"search_volume": el.search_volume,
					"cpc": el.cpc,
					"traffic_index": el.traffic_index,
					"traffic_potential": el.traffic_potential,
					"tix_delta": el.tix_delta,
					"seo_value": el.seo_value,
					"seo_value_potential": el.seo_value_potential,
					"seva_delta": el.seva_delta,
					"similar_position_1": mapData(el.similar, 0, 'position'),
					"similiar_search_volume_1": mapData(el.similar, 0, 'search_volume'),
					"similiar_cpc_1": mapData(el.similar, 0, 'cpc'), 
					"similiar_traffic_index_1": mapData(el.similar, 0, 'traffic_index'),
					"similiar_traffic_potential_1": mapData(el.similar, 0, 'traffic_potential'), 
					"similiar_tix_delta_1": mapData(el.similar, 0, 'tix_delta'),
					"similiar_seo_value_1": mapData(el.similar, 0, 'seo_value'),
					"similiar_seo_value_potential_1": mapData(el.similar, 0, 'seo_value_potential'),
					"similiar_seva_delta_1": mapData(el.similar, 0, 'seva_delta'),
					"similiar_keyword_1": mapData(el.similar, 0, 'keyword'),
					"similar_position_2": mapData(el.similar, 1, 'position'),
					"similiar_search_volume_2": mapData(el.similar, 1, 'search_volume'),
					"similiar_cpc_2": mapData(el.similar, 1, 'cpc'), 
					"similiar_traffic_index_2": mapData(el.similar, 1, 'traffic_index'),
					"similiar_traffic_potential_2": mapData(el.similar, 1, 'traffic_potential'), 
					"similiar_tix_delta_2": mapData(el.similar, 1, 'tix_delta'),
					"similiar_seo_value_2": mapData(el.similar, 1, 'seo_value'),
					"similiar_seo_value_potential_2": mapData(el.similar, 1, 'seo_value_potential'),
					"similiar_seva_delta_2": mapData(el.similar, 1, 'seva_delta'),
					"similiar_keyword_2": mapData(el.similar, 1, 'keyword'),
					"similar_position_3": mapData(el.similar, 2, 'position'),
					"similiar_search_volume_3": mapData(el.similar, 2, 'search_volume'),
					"similiar_cpc_3": mapData(el.similar, 2, 'cpc'), 
					"similiar_traffic_index_3": mapData(el.similar, 2, 'traffic_index'),
					"similiar_traffic_potential_3": mapData(el.similar, 2, 'traffic_potential'), 
					"similiar_tix_delta_3": mapData(el.similar, 2, 'tix_delta'),
					"similiar_seo_value_3": mapData(el.similar, 2, 'seo_value'),
					"similiar_seo_value_potential_3": mapData(el.similar, 2, 'seo_value_potential'),
					"similiar_seva_delta_3": mapData(el.similar, 2, 'seva_delta'),
					"similiar_keyword_3": mapData(el.similar, 2, 'keyword'),
					"similar_position_4": mapData(el.similar, 3, 'position'),
					"similiar_search_volume_4": mapData(el.similar, 3, 'search_volume'),
					"similiar_cpc_4": mapData(el.similar, 3, 'cpc'), 
					"similiar_traffic_index_4": mapData(el.similar, 3, 'traffic_index'),
					"similiar_traffic_potential_4": mapData(el.similar, 3, 'traffic_potential'), 
					"similiar_tix_delta_4": mapData(el.similar, 3, 'tix_delta'),
					"similiar_seo_value_4": mapData(el.similar, 3, 'seo_value'),
					"similiar_seo_value_potential_4": mapData(el.similar, 3, 'seo_value_potential'),
					"similiar_seva_delta_4": mapData(el.similar, 3, 'seva_delta'),
					"similiar_keyword_4": mapData(el.similar, 3, 'keyword'),				
					"similar_position_5": mapData(el.similar, 4, 'position'),
					"similiar_search_volume_5": mapData(el.similar, 4, 'search_volume'),
					"similiar_cpc_5": mapData(el.similar, 4, 'cpc'), 
					"similiar_traffic_index_5": mapData(el.similar, 4, 'traffic_index'),
					"similiar_traffic_potential_5": mapData(el.similar, 4, 'traffic_potential'), 
					"similiar_tix_delta_5": mapData(el.similar, 4, 'tix_delta'),
					"similiar_seo_value_5": mapData(el.similar, 4, 'seo_value'),
					"similiar_seo_value_potential_5": mapData(el.similar, 4, 'seo_value_potential'),
					"similiar_seva_delta_5": mapData(el.similar, 4, 'seva_delta'),
					"similiar_keyword_5": mapData(el.similar, 4, 'keyword')
				});
			});
		}else {
			collectedData.push({
					"keyword": "n/a",
					"position": "n/a",
					"search_volume": "n/a",
					"cpc": "n/a",
					"traffic_index": "n/a",
					"traffic_potential": "n/a",
					"tix_delta": "n/a",
					"seo_value": "n/a",
					"seo_value_potential": "n/a",
					"seva_delta": "n/a",
					"similar_position_1": "n/a",
					"similiar_search_volume_1": "n/a",
					"similiar_cpc_1": "n/a", 
					"similiar_traffic_index_1": "n/a",
					"similiar_traffic_potential_1": "n/a", 
					"similiar_tix_delta_1": "n/a",
					"similiar_seo_value_1": "n/a",
					"similiar_seo_value_potential_1": "n/a",
					"similiar_seva_delta_1": "n/a",
					"similiar_keyword_1": "n/a",
					"similar_position_2": "n/a",
					"similiar_search_volume_2": "n/a",
					"similiar_cpc_2": "n/a", 
					"similiar_traffic_index_2": "n/a",
					"similiar_traffic_potential_2": "n/a", 
					"similiar_tix_delta_2": "n/a",
					"similiar_seo_value_2": "n/a",
					"similiar_seo_value_potential_2": "n/a",
					"similiar_seva_delta_2": "n/a",
					"similiar_keyword_2": "n/a",
					"similar_position_3": "n/a",
					"similiar_search_volume_3": "n/a",
					"similiar_cpc_3": "n/a", 
					"similiar_traffic_index_3": "n/a",
					"similiar_traffic_potential_3": "n/a", 
					"similiar_tix_delta_3": "n/a",
					"similiar_seo_value_3": "n/a",
					"similiar_seo_value_potential_3": "n/a",
					"similiar_seva_delta_3": "n/a",
					"similiar_keyword_3": "n/a",
					"similar_position_4": "n/a",
					"similiar_search_volume_4": "n/a",
					"similiar_cpc_4": "n/a", 
					"similiar_traffic_index_4": "n/a",
					"similiar_traffic_potential_4": "n/a", 
					"similiar_tix_delta_4": "n/a",
					"similiar_seo_value_4": "n/a",
					"similiar_seo_value_potential_4": "n/a",
					"similiar_seva_delta_4": "n/a",
					"similiar_keyword_4": "n/a",				
					"similar_position_5": "n/a",
					"similiar_search_volume_5": "n/a",
					"similiar_cpc_5": "n/a", 
					"similiar_traffic_index_5": "n/a",
					"similiar_traffic_potential_5": "n/a", 
					"similiar_tix_delta_5": "n/a",
					"similiar_seo_value_5": "n/a",
					"similiar_seo_value_potential_5": "n/a",
					"similiar_seva_delta_5": "n/a",
					"similiar_keyword_5": "n/a"
				});
			
			
			
		}
	return collectedData;
}

function mapData(el, idx, key){
	if(!el || !el[idx]){
		return 'n/a';
	}
	return el[idx][key];
}

