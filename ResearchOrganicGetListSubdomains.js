function getResearchOrganicGetListSubdomainsSchema() {

	return {
		id: "ResearchOrganicGetListSubdomains",
		alias: "Research Organic List Subdomains",
		columns: [
			
			{
				id: "host",
				alias: "Subdomain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "spi_percent",
				alias: "Subdomain Visibility in percent",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchOrganicGetListSubdomainsData(data){
	var collectedData = [];

	data.response.map(function(el){
		collectedData.push({
			"host": el.host,
			"spi_percent": el.spi_percent
			
		});
	});

	return collectedData;
}
