function getResearchOrganicGetListRankingsKeywordSchema(){
	return {
		id: "ResearchKeywordRankings",
		alias: "Research Keyword Rankings",
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
				id: "trend",
				alias: "trend",
				dataType: tableau.dataTypeEnum.int
			}
		]
	
	};
}

   


function transformResearchOrganicGetListRankingsKeywordData(data){
		var collectedData = [];
			tableau.log(data.response);
			var el = data.response;
			
		if (el.length > 0){	
			data.response.map(function(el){
				collectedData.push({
					   // "id": feat[i].id,
						"url": el.url,
						"title": el.title,
						"position": el.position,
						"page": el.page,
						"trend": el.trend.trend
										  
				});
			});
		} else{
				collectedData.push({
						"url": "n/a",
						"title": "n/a",
						"position": "n/a",
						"page": "n/a",
						"trend": "n/a"
				});
			}
		
		return collectedData;
    }


