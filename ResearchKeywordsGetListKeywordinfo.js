function getResearchKeywordsGetListKeywordinfoSchema() {

	return {
		id: "ResearchKeywordsGetListKeywordinfo",
		alias: "Research Keywords List Keyword Info",
		columns: [
			
			{
				id: "keyword",
				alias: "keyword",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "competition",
				alias: "competition",
				dataType: tableau.dataTypeEnum.float
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
				id: "ad_budget",
				alias: "ad_budget",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "integration",
				alias: "integration",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "advertiser_count",
				alias: "advertiser_count",
				dataType: tableau.dataTypeEnum.int
			}
			,
			{
				id: "year_month",
				alias: "year_month",
				dataType: tableau.dataTypeEnum.string
			}
			
		]
	};
}

function transformResearchKeywordsGetListKeywordinfoData(data){
	
	var collectedData = [];
	var el = data.response;
	console.log(el);
//	data.response.map(function(el){
		collectedData.push({
			"keyword": el[0].keyword,
			"cpc": el[0].cpc,
			"competition": el[0].competition,
			"search_volume": el[0].search_volume,
			"trend": el[0].trend,
			"ad_budget": el[0].ad_budget,
			"integration": el[0].integration,
			"advertiser_count": el[0].advertiser_count,
			"year_month": el[0].year_month
			
		});
	//});
	
	return collectedData;
}

