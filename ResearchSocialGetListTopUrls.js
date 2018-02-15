function getResearchSocialGetListTopUrlsSchema() {
	return {
		id: "ResearchSocialGetListTopUrls",
		alias: "Research Social List Top Urls",
		columns: [
			
			{
				id: "url",
				alias: "url",
				dataType: tableau.dataTypeEnum.string
			},
			
			{
				id: "svi",
				alias: "social visibility",
				dataType: tableau.dataTypeEnum.float
			},
{
				id: "fb.to",
				alias: "facebook total",
				dataType: tableau.dataTypeEnum.float
			},				
			{
				id: "li.to",
				alias: "linkedin total",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "gp.to",
				alias: "google plus total",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "pi.to",
				alias: "pinterest total",
				dataType: tableau.dataTypeEnum.float
			}
		]
	};
}

function transformResearchSocialGetListTopUrlsData(data){
	var collectedData = [];
	var el = data.response;
	
	console.log(el);
	
	if(el.length > 0){
			data.response.map(function(el){
				
				collectedData.push({
					
					"url": el.url,
					"svi": el.svi,
					"fb.to": el['fb.to'],
					"li.to": el['li.to'],
					"gp.to": el['gp.to'],				
					"pi.to": el['pi.to']
				});
			});
	}else{
		collectedData.push({
					"url": 'n/a',
					"svi": 'n/a',
					"fb.to": 'n/a',
					"li.to": 'n/a',
					"gp.to": 'n/a',				
					"pi.to": 'n/a'
			
		});
	}
	
	return collectedData;
}

