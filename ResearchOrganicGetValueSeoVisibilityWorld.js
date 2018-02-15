function getResearchOrganicGetValueSeoVisibilityWorldSchema() {
	return {
		id: "ResearchOrganicGetValueSeoVisibilityWorld",
		alias: "Research Organic Value SEO Visibility World",
		columns: [
		/*	{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},*/
			
			{
				id: "seo_world_visibility",
				alias: "seo_world_visibility",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchOrganicGetValueSeoVisibilityWorldData(data){
	
	var collectedData = [];
//	var url = document.getElementById('url').value;
	var el = data.response;
		collectedData.push({
		//	"domain": url,
			"seo_world_visibility": el.sum
		});

	return collectedData;
}