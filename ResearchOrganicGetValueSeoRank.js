function getResearchOrganicGetValueSeoRankSchema(){
	return {
		id: "ResearchOrganicGetValueSeoRank",
		alias: "Research Organic Value SEO Rank",
		columns: [
		
			{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "visibility",
				alias: "visibility",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "seo_rank",
				alias: "SEO Rank",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchOrganicGetValueSeoRankData(data){
	
var collectedData = [];
var el = data.response;
//console.log(el);
//	data.response.map(function(el){
		collectedData.push({

			"domain": el[0].domain,
			"visibility": el[0].visibility,
			"seo_rank": el[0].id
		});
	//});
	
	return collectedData;
}

