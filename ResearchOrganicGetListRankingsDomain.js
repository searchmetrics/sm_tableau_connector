function getResearchOrganicGetListRankingsDomainSchema() {
	return {
		id: "ResearchRankings",
		alias: "Research Rankings Domain",
		columns: [
			{
				id: "position",
				alias: "position",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "page",
				alias: "page",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "last_months_count",
				alias: "last_months_count",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "competition",
				alias: "competition",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "avg_popularity",
				alias: "avg_popularity",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "keyword",
				alias: "keyword",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "title",
				alias: "title",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "traffic",
				alias: "traffic",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "adbudget",
				alias: "adbudget",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "potential",
				alias: "potential",
				dataType: tableau.dataTypeEnum.float
			}
		]
	};
}

function transformResearchOrganicGetListRankingsDomainData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"position": el.position,
			"page": el.page,
			"last_months_count": el.last_months_count,
			"competition": el.competition,
			"avg_popularity": el.avg_popularity,
			"cpc": el.cpc,
			"keyword": el.keyword,
			"title": el.title,
			"url": el.url,
			"traffic": el.traffic,
			"adbudget": el.adbudget,
			"potential": el.potential                    
		});
	});
	
	return collectedData;
}

