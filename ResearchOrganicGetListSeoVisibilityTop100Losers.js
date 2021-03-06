function getResearchOrganicGetListSeoVisibilityTop100LosersSchema() {
	return {
		id: "ResearchOrganicGetListSeoVisibilityTop100Losers",
		alias: "Research Organic List Seo Visibility Top 100 Losers",
		columns: [
			{
				id: "host",
				alias: "host",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "position",
				alias: "position",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "seo_visibility_actual",
				alias: "seo_visibility_actual",
				dataType: tableau.dataTypeEnum.int
			}, 
			{
				id: "seo_visibility_last",
				alias: "seo_visibility_last",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "difference",
				alias: "difference",
				dataType: tableau.dataTypeEnum.int
			}
			
		]
	};
}

 function transformResearchOrganicGetListSeoVisibilityTop100LosersData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"host": el.host,
			"position": el.position,
			"seo_visibility_actual": el.seo_visibility_actual,
			"seo_visibility_last": el.seo_visibility_last,
			"difference": el.difference 
			           
		});
	});
	
	return collectedData;
}

