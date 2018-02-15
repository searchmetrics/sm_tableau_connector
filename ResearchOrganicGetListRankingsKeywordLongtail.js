function getResearchOrganicGetListRankingsKeywordLongtailSchema() {
return {
			id: "ResearchRankingsKeywordLongtail",
			alias: "Research Rankings Keyword Longtail",
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
				}
			]
		};
}
	
function transformResearchOrganicGetListRankingsKeywordLongtailData(data){
	var collectedData = [];
	var el = data.response;
	
		if (el.length > 0){	
			data.response.map(function(el){
				collectedData.push({
					"url": el.url,
					"title": el.title,
					"position": el.position,
					"page": el.page                 
				});
			});
			} else{
					collectedData.push({
					"url": "n/a",
					"title": "n/a",
					"position": "n/a",
					"page": "n/a"     
						});
		}
	return collectedData;
}
