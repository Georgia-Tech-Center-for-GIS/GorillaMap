google.load('visualization', '1', {'packages':['corechart', 'table', 'geomap']});

var mapBounds = new google.maps.LatLngBounds(
	new google.maps.LatLng(-1.539,29.443),
	new google.maps.LatLng(-1.407,29.531));
var mapMinZoom = 13;
var mapMaxZoom = 16;
var maptiler = new google.maps.ImageMapType({
	getTileUrl: function(coord, zoom) { 
	var xx13= coord.x-4766;
	var yy13= coord.y-4128;
	var xx14= coord.x-9532;
	var yy14= coord.y-8256;
	var xx15= coord.x-19064;
	var yy15= coord.y-16512;
	var xx16= coord.x-38128;
	var yy16= coord.y-33024;
		var xx17= coord.x-76256;
	var yy17= coord.y-66048;
		var proj = map.getProjection();
		var tileSize = 256 / Math.pow(2,zoom);
		var tileBounds = new google.maps.LatLngBounds(
            proj.fromPointToLatLng(new google.maps.Point(coord.x*tileSize, (coord.y+1)*tileSize)),
			proj.fromPointToLatLng(new google.maps.Point((coord.x+1)*tileSize, coord.y*tileSize))
        );

        if (mapBounds.intersects(tileBounds) && (zoom >= mapMinZoom) && (zoom <= mapMaxZoom))
		if (zoom == 13)
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy13 + "x0" + xx13 + ".jpg";
		if (zoom == 14)
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy14 + "x0" + xx14 + ".jpg";	
		if ((zoom == 15)&&(xx15 < 10)&&(yy15 >= 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_" + yy15 + "x0" + xx15 + ".jpg";
		if ((zoom == 15)&&(xx15 >= 10)&&(yy15 < 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy15 + "x" + xx15 + ".jpg";
		if ((zoom == 15)&& (xx15 < 10)&&(yy15 < 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy15 + "x0" + xx15 + ".jpg";
		if ((zoom == 15)&& (xx15 >= 10)&&(yy15 >= 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_" + yy15 + "x" + xx15 + ".jpg";
		if ((zoom == 16)&&(xx16 < 10)&&(yy16 >= 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_" + yy16 + "x0" + xx16 + ".jpg";
		if ((zoom == 16)&&(xx16 >= 10)&&(yy16 < 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy16 + "x" + xx16 + ".jpg";
		if ((zoom == 16)&& (xx16 < 10)&&(yy16 < 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy16 + "x0" + xx16 + ".jpg";
		if ((zoom == 16)&& (xx16 >= 10)&&(yy16 >= 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_" + yy16 + "x" + xx16 + ".jpg";	
					if ((zoom == 17)&&(xx17 < 10)&&(yy17 >= 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_" + yy17 + "x0" + xx17 + ".jpg";
		if ((zoom == 17)&&(xx17 >= 10)&&(yy17 < 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy17 + "x" + xx17 + ".jpg";
		if ((zoom == 17)&& (xx17 < 10)&&(yy17 < 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_0" + yy17 + "x0" + xx17 + ".jpg";
		if ((zoom == 17)&& (xx17 >= 10)&&(yy17 >= 10))
			return "http://www.prism.gatech.edu/~gzhang60/map/" +
		
			+ zoom + "/" + zoom + "_" + yy17 + "x" + xx17 + ".jpg";	
        else
            return "http://www.maptiler.org/img/none.png";
			
	},
	tileSize: new google.maps.Size(256, 256),
	isPng: true
});
var layer;
var map;
var chartB;
var country;
var countrys;
var wherepolygon;

function initialize() {
	map = new google.maps.Map(document.getElementById('map-canvas'), {
			  center: new google.maps.LatLng(-1.4874, 29.4933),
			  zoom: 12,
			  maxZoom: 17,
			  mapTypeId: google.maps.MapTypeId.TERRAIN,
			  
			  streetViewControl:false,
			 
			});
	map.setMapTypeId('satellite');
	map.overlayMapTypes.insertAt(0, maptiler);		
	geocoderService = new google.maps.Geocoder();
	layer = new google.maps.FusionTablesLayer();  
 	
	google.maps.event.addDomListener(map,'mousemove',function(event) { 
	document.getElementById('latspan').innerHTML = Math.round(event.latLng.lat()*10000)/10000 
	document.getElementById('lngspan').innerHTML = Math.round(event.latLng.lng()*10000)/10000 
	} )
	     		var aa11 = document.getElementById("selector");
		for (i = 0; i< aa11.options.length; i++){
		aa11.options[i].selected = false;
				if (aa11.options[i].value == '90%')
				{
				aa11.options[i].selected = true;

				
				}
				}
				     		var bb11 = document.getElementById("status");
		for (i = 0; i< bb11.options.length; i++){
		bb11.options[i].selected = false;
				if (bb11.options[i].value == '1999')
				{
				bb11.options[i].selected = true;

				
				}
				}
				     		var cc11 = document.getElementById("district");
		for (i = 0; i< cc11.options.length; i++){
		cc11.options[i].selected = false;
				if (cc11.options[i].value == 'BEE')
				{
				cc11.options[i].selected = true;

				
				}
				}
				     		var dd11 = document.getElementById("selectorB");
		for (i = 0; i< dd11.options.length; i++){
		dd11.options[i].selected = false;
				if (dd11.options[i].value == 'SUMT')
				{
				dd11.options[i].selected = true;

				
				}
				}
	infoWindow = new google.maps.InfoWindow();

	gorillaselect();
	
			google.maps.event.addDomListener(layer, 'click', function(e) {
				var Plot = e.row['Plot'].value;
				var GAL = e.row['GALT'].value;
				var PLI = e.row['PLIT'].value;
				var CRN = e.row['CRNT'].value;
                var Location = e.row['Location'].value;		
						$(function(){
				$('#vtab>ul>li').removeClass('selected');
                $('#vtab>ul>li:last').addClass('selected');

                var index = $('#vtab>ul>li').index($('#vtab>ul>li:last'));
                $('#vtab>div').hide().eq(index).show();
});
			    drawVisualization(Plot,Location);
				drawTable2(Plot,Location);				 								  
				var contentString25 = '<label>Plot: </label>'+ '<label>' +Plot+ '</label>' +'<br>' + '<label>Location: </label>'+ '<label>' +Location+ '</label>' +'<br>' + '<label> GAL: </label>'+ '<label>'+ GAL +'</label>' + '<br>' + '<label> PLI: </label>' + '<label>'+ PLI +'</label>'+ '<br>' + '<label> CRN: </label>' + CRN;	
				infoWindow.setContent(contentString25);
				infoWindow.setOptions({disableAutoPan:true});
				infoWindow.setPosition(e.latLng);
				infoWindow.open(map);		
				});	

}


	  

google.maps.event.addDomListener(window, 'load', initialize)