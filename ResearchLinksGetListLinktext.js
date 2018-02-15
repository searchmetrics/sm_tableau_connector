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
	var el = data.response;
	
		if (typeof el !== 'undefined'){	
			data.response.map(function(el){
				collectedData.push({
					"anchortext": el.anchortext,
					"frequency": el.frequency,
					"percentage": el.percentage,
					"refdoms": el.refdoms
				});
			});
		} else{
				collectedData.push({
					"anchortext": "n/a",
					"frequency": "n/a",
					"percentage": "n/a",
					"refdoms": "n/a"   
					});
		}
	return collectedData;
}

