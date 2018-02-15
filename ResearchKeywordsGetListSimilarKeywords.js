function getResearchKeywordsGetListSimilarKeywordsSchema() {
	return {
		id: "ResearchKeywordsGetListSimilarKeywords",
		alias: "Research Keywords List Similar Keywords",
		columns: [
		
			{
				id: "keyword",
				alias: "keyword",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "search_volume",
				alias: "search_volume",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "trend",
				alias: "trend",
				dataType: tableau.dataTypeEnum.string
			}, 
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "advertiser_count",
				alias: "advertiser_count",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "integration",
				alias: "integration",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "adbudget",
				alias: "adbudget",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchKeywordsGetListSimilarKeywordsData(data){
	var collectedData = [];
	var el = data.response;
		if (el.length > 0){
			data.response.map(function(el){
				collectedData.push({
					"keyword": el.keyword,
					"search_volume": el.search_volume,
					"trend": el.trend,
					"cpc": el.cpc,
					"advertiser_count": el.advertiser_count,
					"integration": el.integration,
					"adbudget": el.adbudget
					
					
				});
			});
		}else {
			collectedData.push({
					"keyword": "n/a",
					"search_volume": "n/a",
					"trend": "n/a",
					"cpc": "n/a",
					"advertiser_count": "n/a",
					"integration": "n/a",
					"adbudget": "n/a"
					});
			
		}
		
	return collectedData;
}

