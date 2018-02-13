function getResearchOrganicGetListSerpSpreadSchema() {

	return {
		id: "ResearchOrganicGetListSerpSpread",
		alias: "Research Organic List Serp Spread",
		columns: [
			{
				id: "url",
				alias: "URL",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "abs_group1",
				alias: "Position 1-3",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "per_group1",
				alias: "Position 1-3 %",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "abs_group2",
				alias: "Position 4-6",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "per_group2",
				alias: "Position 4-6 %",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "abs_group3",
				alias: "Position 7-10",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "per_group3",
				alias: "Position 7-10%",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "abs_group4",
				alias: "Position 11-21",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "per_group4",
				alias: "Position 11-21%",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "abs_group5",
				alias: "Position 21-30",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "per_group5",
				alias: "Position 21-30%",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "abs_group6",
				alias: "Position 31-40",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "per_group6",
				alias: "Position 31-40%",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "abs_group7",
				alias: "Position 41+",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "per_group7",
				alias: "Position 41+%",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchOrganicGetListSerpSpreadData(data){
	var	el = data.response;
	var collectedData = [];
	var	el = data.response;
	var url = document.getElementById('url').value;
//console.log(el);
//console.log(Object.keys(el));
//console.log(el.abs.group1);

		collectedData.push({
			"url": url,
			"abs_group1": el.abs.group1,
			"per_group1": el.per.group1,
			"abs_group2": el.abs.group2,
			"per_group2": el.per.group2,
			"abs_group3": el.abs.group3,
			"per_group3": el.per.group3,
			"abs_group4": el.abs.group4,
			"per_group4": el.per.group4,
			"abs_group5": el.abs.group5,
			"per_group5": el.per.group5,
			"abs_group6": el.abs.group6,
			"per_group6": el.per.group6,
			"abs_group7": el.abs.group7,
			"per_group7": el.per.group7
		});

	
	return collectedData;
}

