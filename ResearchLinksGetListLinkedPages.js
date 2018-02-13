function getResearchLinksGetListLinkedPagesSchema() {
	return {
		id: "ResearchLinksGetListLinkedPages",
		alias: "Research Links List Linked Pages",
		columns: [
		
			{
				id: "linkedpage",
				alias: "linkedpage",
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

function transformResearchLinksGetListLinkedPagesData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"linkedpage": el.linkedpage,
			"frequency": el.frequency,
			"percentage": el.percentage,
			"refdoms": el.refdoms
		});
	});
	
	return collectedData;
}

