function getResearchUniversalGetListVisibilitySchema() {
	return {
		id: "ResearchUniversalGetListVisibility",
		alias: "Research Universal List Visibility",
		columns: [
			
			{
				id: "images_visibility_abs",
				alias: "images_visibility_abs",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "images_visibility_per",
				alias: "images_visibility_per",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "images_total_keyword_position",
				alias: "images_total_keyword_position",
				dataType: tableau.dataTypeEnum.float
			},
							
			{
				id: "maps_visibility_abs",
				alias: "maps_visibility_abs",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "maps_visibility_per",
				alias: "maps_visibility_per",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "maps_total_keyword_position",
				alias: "maps_total_keyword_position",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "video_visibility_abs",
				alias: "video_visibility_abs",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "video_visibility_per",
				alias: "video_visibility_per",
				dataType: tableau.dataTypeEnum.float
			},
			{
				id: "video_total_keyword_position",
				alias: "video_total_keyword_position",
				dataType: tableau.dataTypeEnum.float
			}
			
			
		]
	};
}

function transformResearchUniversalGetListVisibilityData(data){
	
var collectedData = [];
var el = data.response;
console.log(el);
	  
			collectedData.push({
			"images_visibility_abs": el.images ? el.images.visibility_abs : null,
			"images_visibility_per": el.images ? el.images.visibility_per : null,
			"images_total_keyword_position": el.images ? el.images.total_keyword_position : null,
			"maps_visibility_abs": el.maps ? maps.visibility_abs: null,
			"maps_visibility_per": el.maps ? el.maps.visibility_per : null,
			"maps_total_keyword_position": el.maps ? el.maps.total_keyword_position : null,
			"video_visibility_abs": el.video ? el.video.visibility_abs : null,
			"video_visibility_per": el.video ? el.video.visibility_per : null,
			"video_total_keyword_position": el.video ? el.video.total_keyword_position : null
			
		});
	
	
	return collectedData;
}
	


