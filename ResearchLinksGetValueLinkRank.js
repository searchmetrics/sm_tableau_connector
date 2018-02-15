function getResearchLinksGetValueLinkRankSchema() {
	return {
		id: "ResearchLinksGetValueLinkRank",
		alias: "Research Links Value Link Rank",
		columns: [
		
			{
				id: "domain",
				alias: "domain",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "ccode",
				alias: "country code",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "rank",
				alias: "rank",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "maxrank",
				alias: "maxrank",
				dataType: tableau.dataTypeEnum.float
			}, 
			{
				id: "avgrank",
				alias: "avgrank",
				dataType: tableau.dataTypeEnum.float
			}
			
		]
	};
}

function transformResearchLinksGetValueLinkRankData(data){
	
	var collectedData = [];
	var el = data.response;
	console.log(el);
		if (typeof el !=='undefined'){	
			collectedData.push({
				"domain": el.domain,
				"ccode": el.ccode,
				"rank": el.rank,
				"maxrank": el.maxrank,
				"avgrank": el.avgrank
			});
		} else{
				collectedData.push({
				"domain": "n/a",
				"ccode": "n/a",
				"rank": "n/a",
				"maxrank": "n/a",
				"avgrank": "n/a"   
					});
		}
	
	return collectedData;
}

