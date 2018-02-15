function getResearchOrganicGetListIndustrySpreadSchema() {
		return {
			id: "ResearchOrganicGetListIndustrySpread",
			alias: "Research Organic List Industry Spread",
			columns: [
				
				{
					id: "category",
					alias: "category",
					dataType: tableau.dataTypeEnum.string
				},
				{
					id: "percent",
					alias: "percent",
					dataType: tableau.dataTypeEnum.float
				}
				
			]
		};
	}
 function transformResearchOrganicGetListIndustrySpreadData(data){
		var collectedData = [];
		var cat = "";
		var el = data.response;
			if (el.length > 0){	
				data.response.map(function(el){
						switch (el.category) {
								case 194590:
									cat = "Sports & Fitness";
									break;
								case 194593:
									cat = "Finance";
									break;
								case 194594:
									cat = "Home & Garden";
									break;
								case 194595:
									cat = "Hobbies & Leisure";
									break;
								case 194597:
									cat = "Vehicles";
									break;
								case 194598	:
									cat = "Media & Events";
									break;
								case 194600:
									cat = "Travel & Tourism";
									break;
								case 194601:
									cat = "Gifts & Occasions";
									break;
								case 194602:
									cat = "Family & Community";
									break;
								case 194603:
									cat = "Health";
									break;
								case 194605:
									cat = "Real Estate";
									break;
								case 194606:
									cat = "Apparel";
									break;
								case 194608:
									cat = "Food";
									break;
								case 194610:
									cat = "Beauty & Personal Care";
									break;
								case 194849:
									cat = "Law & Government Products";
									break;
								case 196581:
									cat = "Consumer Electronics";
									break;
								case 196722	:
									cat = "Computers";
														
						}
							
					collectedData.push({
						"category": cat,
						"percent": el.percent,
										
						
					});
				});
			} else{
					collectedData.push({
						"category": "n/a",
						"percent": "n/a"   
				});
			}
				
		return collectedData;
    }

