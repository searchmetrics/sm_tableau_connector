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

	data.response.map(function(el){
		collectedData.push({
			"url": el.url,
			"title": el.title,
			"position": el.position,
			"page": el.page                 
		});
	});
	
	return collectedData;
}
