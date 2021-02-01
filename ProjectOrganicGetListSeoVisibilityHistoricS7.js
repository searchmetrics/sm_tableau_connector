function getProjectOrganicGetListSeoVisibilityHistoricS7Schema(){ 
	return {
		id: "SeoVisibilityHistoric",
		alias: "Seo Visibility Historic",
		columns: [
			{
				id: "date",
				alias: "date",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "sum_visibility",
				alias: "visibility",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "count_keyword",
				alias: "count_kewyord",
				dataType: tableau.dataTypeEnum.int
			}
		]
	};
}
	
function transformProjectOrganicGetListSeoVisibilityHistoricS7Data(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"date": el.date,
			"domain": el.data[0].domain,
			"sum_visibility": el.data[0].sum_visibility,
			"count_keywords": el.data[0].count_keywords 
		});
	});

	return collectedData;
}

