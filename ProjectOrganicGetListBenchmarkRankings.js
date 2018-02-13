function getProjectOrganicGetListBenchmarkRankingsSchema() {
	return {
		id: "ProjectOrganicGetListBenchmarkRankings",
		alias: "Project Organic List Benchmark Rankings",
		columns: [
			{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "visibility",
				alias: "visibility",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "avg_position",
				alias: "avg_position",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "keyword_coverage",
				alias: "keyword_coverage",
				dataType: tableau.dataTypeEnum.int
			}, 
			 
			{
				id: "url_type",
				alias: "url_type",
				dataType: tableau.dataTypeEnum.float
			}
		]
	};
}

function transformProjectOrganicGetListBenchmarkRankingsData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"domain": el.domain,
			"visibility": el.visibility,
			"avg_position": el.avg_position,
			"keyword_coverage": el.keyword_coverage,
			"url_type": el.url_type
		});
	});
	
	return collectedData;
}
