function getResearchLinksGetListLinktextSchema() {
	return {
		id: "ResearchLinksGetListLinktext",
		alias: "Research Links List Linktext",
		columns: [
		
			{
				id: "anchortext",
				alias: "anchortext",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "frequency",
				alias: "frequency",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "percentage",
				alias: "percentage",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "refdoms",
				alias: "refdoms",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchLinksGetListLinktextData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"anchortext": el.anchortext,
			"frequency": el.frequency,
			"percentage": el.percentage,
			"refdoms": el.refdoms
		});
	});
	
	return collectedData;
}

