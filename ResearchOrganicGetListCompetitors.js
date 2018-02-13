function getResearchOrganicGetListCompetitorsSchema() {
	return {
		id: "ResearchOrganicGetListCompetitors",
		alias: "Research Organic  List Competitors",
		columns: [
			{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "avg_position_1",
				alias: "avg_position_1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "avg_position_2",
				alias: "avg_position_2",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "common_keywords",
				alias: "tcommon_keywords",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_1",
				alias: "traffic_1",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "traffic_2",
				alias: "traffic_2",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "costs",
				alias: "costs",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "total_kw_count",
				alias: "total_kw_count",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "diff_keywords",
				alias: "diff_keywords",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchOrganicGetListCompetitorsData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"domain": el.domain,
			"avg_position_1": el.avg_position_1,
			"avg_position_2": el.avg_position_2,
			"common_keywords": el.common_keywords,
			"traffic_1": el.traffic_1,
			"traffic_2": el.traffic_2,
			"costs": el.costs,
			"total_kw_count": el.total_kw_count,
			"diff_keywords": el.diff_keywords
		});
	});
	
	return collectedData;
    }

