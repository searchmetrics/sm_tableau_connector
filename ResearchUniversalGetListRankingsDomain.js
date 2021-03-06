function getResearchUniversalGetListRankingsDomainSchema() {
	return {
		id: "ResearchUniversalGetListRankingsDomain",
		alias: "Research Universal List Rankings Domain",
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
				id: "page",
				alias: "page",
				dataType: tableau.dataTypeEnum.int
			}, 
			{
				id: "traffic_monthly",
				alias: "traffic_monthly",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "type",
				alias: "type",
				dataType: tableau.dataTypeEnum.string
			},
			 
			{
				id: "competition",
				alias: "competition",
				dataType: tableau.dataTypeEnum.float
			}
			, 
			{
				id: "search_volume_monthly",
				alias: "search_volume_monthly",
				dataType: tableau.dataTypeEnum.float
			}
			, 
			{
				id: "title",
				alias: "title",
				dataType: tableau.dataTypeEnum.string
			}
			, 
			{
				id: "url",
				alias: "url",
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

function transformResearchUniversalGetListRankingsDomainData(data){
	var collectedData = [];
	var el = data.response;

	tableau.log(el);
	if (el.length > 0){	
		data.response.map(function(el){
			collectedData.push({
				"keyword": el.keyword,
				"position": el.position,
				"page": el.page,
				"traffic_monthly": el.traffic_monthly,
				"cpc": el.cpc,				
				"type": el.type,
				"competition": el.competition,
				"search_volume_monthly": el.search_volume_monthly,
				"title": el.title,
				"url": el.url,
				"search": el.search
			});
		});
	}else{
		collectedData.push({
				"keyword": 'n/a',
				"position": 'n/a',
				"page": 'n/a',
				"traffic_monthly": 'n/a',
				"cpc": 'n/a',				
				"type": 'n/a',
				"competition": 'n/a',
				"search_volume_monthly": 'n/a',
				"title": 'n/a',
				"url": 'n/a',
				"search": 'n/a'
			});
	}
	return collectedData;
}

