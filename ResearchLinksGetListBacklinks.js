function getResearchLinksGetListBacklinksSchema() {

	return {
		id: "ResearchLinksGetListBacklinks",
		alias: "Research Backlinks List",
		columns: [
			{
				id: "backlinkpage",
				alias: "Backlink Page",
				dataType: tableau.dataTypeEnum.string
			}, 
			{
				id: "title",
				alias: "title",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "linktext",
				alias: "linktext",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "extL",
				alias: "extL",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "intL",
				alias: "intL",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "sumL",
				alias: "sumL",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "sr",
				alias: "SPS",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "pos",
				alias: "pos",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "linktarget",
				alias: "linktarget",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "tag",
				alias: "tag",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "nofollow",
				alias: "nofollow",
				dataType: tableau.dataTypeEnum.int
			},
			{
				id: "ip",
				alias: "ip",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "ccode",
				alias: "Country Code",
				dataType: tableau.dataTypeEnum.string
			},
			{
				id: "country",
				alias: "country",
				dataType: tableau.dataTypeEnum.string
			}
		]
	};
}

function transformResearchLinksGetListBacklinksData(data){
	var collectedData = [];

	var el = data.response;
	tableau.log(el);
	
	if (typeof el !== "undefined"){	
		data.response.map(function(el){
			collectedData.push({
				"backlinkpage": el.backlinkpage,
				"title": el.title,
				"linktext": el.linktext,
				"extL": el.extL,
				"intL": el.intL,
				"sumL": el.sumL,
				"sr": el.sr,
				"pos": el.pos,
				"linktarget": el.linktarget,
				"tag": el.tag,
				"nofollow": el.nofollow,
				"ip": el.ip,
				"ccode": el.ccode,
				"country": el.country
				
			});
		});
	} else{
		collectedData.push({
				"backlinkpage": "n/a",
				"title": "n/a",
				"linktext": "n/a",
				"extL": "n/a",
				"intL": "n/a",
				"sumL": "n/a",
				"sr": "n/a",
				"pos": "n/a",
				"linktarget": "n/a",
				"tag": "n/a",
				"nofollow": "n/a",
				"ip": "n/a",
				"ccode": "n/a",
				"country": "n/a"
				
			});
	}
	return collectedData;
}
