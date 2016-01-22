$('#findMyCode').click(function(event) {
	event.preventDefault();

	$.ajax({
		type: 'GET',
		url: 
			"https:maps.googleapis.com/maps/api/geocode/xml?address="
			+encodeURIComponent($('#address').val())
			+"&key=AIzaSyCstuGcE-irjHgOi4WTMTnUNjDUcVWaW34",
		dataType: 'xml',
		success:processXML
	});

	function processXML(xml) {
		$(xml).find('address_component').each(function() {
			if ($(this).find('type').text() == 'postal_code') {
				$('#success').fadeIn();
				$('#success').html("The post code you need is"
					+$(this).find('long_name').text()).fadeIn();	
			}
		});
	}
});