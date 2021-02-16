function getProjectOrganicGetListRankingsFilterS7Schema(){ 
	return {
		id: "ProjectKeywordRanking",
		alias: "Project Keyword Rankings",
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
				id: "directory",
				alias: "directory",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "traffic",
				alias: "traffic",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "ad_budget",
				alias: "ad_budget",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_volume",
				alias: "traffic_volume",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "delta_traffic",
				alias: "delta_traffic",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "cpc",
				alias: "cpc",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "trend",
				alias: "trend",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "keyword",
				alias: "keyword",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "tags",
				alias: "tags",
				dataType: tableau.dataTypeEnum.string
			}
		]
	};
}
	
function transformProjectOrganicGetListRankingsFilterS7Data(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"url": el.pos[0].url,
			"title": el.pos[0].title,
			"position": el.pos[0].position,
			"page": el.pos[0].page,
			"directory": el.pos[0].directory,
			"traffic": el.pos[0].traffic,
			"ad_budget": el.pos[0].ad_budget,
			"traffic_volume": el.pos[0].traffic_volume,
			"delta_traffic": el.pos[0].delta_traffic,
			"cpc": el.pos[0].cpc,
			"trend": el.pos[0].trend.trend,
			"keyword": el.keyword,
			"tags": el.pos[0].tags 
		});
	});

	return collectedData;
}

