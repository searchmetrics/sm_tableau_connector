function getResearchOrganicGetListSeoVisibilityCountrySchema() {

	return {
		id: "ResearchOrganicGetListSeoVisibilityCountry",
		alias: "Research Organic  List Seo Visibility Country",
		columns: [
		
			{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "visibility",
				alias: "visibility",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "country_code",
				alias: "country_code",
				dataType: tableau.dataTypeEnum.string
			}
			
		]
	};
}

function transformResearchOrganicGetListSeoVisibilityCountryData(data){
	
var collectedData = [];
var el = data.response;
var url = document.getElementById('url').value;
console.log(el);
	data.response.map(function(el){
		collectedData.push({
			"domain": url,
			"visibility": el.visibility,
			"country_code": el.country_code
		});
	});
	
	return collectedData;
}



