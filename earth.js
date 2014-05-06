    var ge;
	var coordinates = [];
	var polyline = null;
    var elevations = null;
	var elevationService = null;
	var map = null;
    var chart = null;
	var SAMPLES = 256;
	var lineStringPlacemark;
	var placemark2;
var lineString;
var placemark;
	google.load("visualization", "1", {packages: ["columnchart"]});
    google.load("earth", "1", {"other_params":"sensor=false"});

    function init() {
		var cc11 = document.getElementById("district");
		for (i = 0; i< cc11.options.length; i++){
		cc11.options[i].selected = false;
				if (cc11.options[i].value == '')
				{
				cc11.options[i].selected = true;

				
				}
				}
				
      google.earth.createInstance('map3d', initCB, failureCB);

	 
	     var myLatlng = new google.maps.LatLng(-1.472, 29.488);
     var myOptions = {
      zoom: 13,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    }
		 map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		 	  
		 chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
   
    elevationService = new google.maps.ElevationService();
	
	    /*var query = "SELECT geometry FROM 14PP6tt52Tx5YSPsSq7xX7B4q-qU9jJ-c5pqgquk0";
        query = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'http://www.google.com/fusiontables/gvizdata?tq=' + query);
		gvizQuery.send(function(response) {
          var numRows = response.getDataTable().getNumberOfRows();
		  alert(numRows);
          for (var i = 0; i < 100; i++) {
            var stringCoordinates = response.getDataTable().getValue(i, 0);
			var splitCoordinates2 = stringCoordinates.replace('<Point><coordinates>','');
			var splitCoordinates3 = splitCoordinates2.replace('</coordinates></Point>','');
			var splitCoordinates = splitCoordinates3.split(',');
            var lat = splitCoordinates[1];
            var lng = splitCoordinates[0];
          }
		  
        });*/
		



			
	  google.maps.event.addDomListener(document.getElementById('district'),'change', function() {
      var features = ge.getFeatures();
	  
  while (features.getLastChild() != null)
  {
    features.removeChild(features.getLastChild());
  }

          var link = ge.createLink('');
		 var column2 = document.getElementById('district').value;
         var href = 'http://www.prism.gatech.edu/~gzhang60/Gorillar/doc_' + column2 + '.kml';
		 
         link.setHref(href);
         var networkLink = ge.createNetworkLink('');
         networkLink.set(link, true, true); // Sets the link, refreshVisibility, and flyToView.
         ge.getFeatures().appendChild(networkLink);
		 		 var link2 = ge.createLink('');
		 var column2 = document.getElementById('district').value;
         var href2 = 'http://www.prism.gatech.edu/~gzhang60/Gorillar/gorilla_move_' + column2 +  '_line.kml';
		 
         link2.setHref(href2);
         var networkLink2 = ge.createNetworkLink('');
         networkLink2.set(link2, true, true); // Sets the link, refreshVisibility, and flyToView.
         ge.getFeatures().appendChild(networkLink2);
		
		});
ge.setBalloon(null);

    }
	

	    function setRate(rate){
	  var kkoo = document.getElementById('clockRate').value;
      var rate = 60*60*24* kkoo;
      ge.getTime().setRate(eval(rate));
      }
	
		  function eventHandler(event) {
	  
   event.preventDefault(); 
  var placemark = ge.createPlacemark('');
  ge.getFeatures().appendChild(placemark);

  // Create style map for placemark
  var icon = ge.createIcon('');
  icon.setHref('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
  var style = ge.createStyle('');
  style.getIconStyle().setIcon(icon);
  placemark.setStyleSelector(style);

  // Create point
  var point = ge.createPoint('');
  point.setLatitude(event.getLatitude());
  point.setLongitude(event.getLongitude());
  placemark.setGeometry(point);
  
  
  var lat = event.getLatitude();
            var lng = event.getLongitude();
			var coordinate = new google.maps.LatLng(lat, lng);
			lineString.getCoordinates().pushLatLngAlt(lat, lng,0);
			lineStringPlacemark.setStyleSelector(ge.createStyle(''));
            var lineStyle = lineStringPlacemark.getStyleSelector().getLineStyle();
            lineStyle.setWidth(5);
            lineStyle.getColor().set('9900ffff');
			ge.getFeatures().appendChild(lineStringPlacemark);
			coordinates.push(coordinate);
			updateElevation();
			

    }
	
    function initCB(instance) {
	
      ge = instance;
      ge.getWindow().setVisibility(true);
      ge.getNavigationControl().setVisibility(ge.VISIBILITY_AUTO);
	  
      jumpHtml = '<input type="text" id="clockRate" value="365">';
      document.getElementById('sample-ui').innerHTML += jumpHtml;
      addSampleButton('Set rate', setRate);
	  document.getElementById('clockRate').style.width = "120px";

	
	    google.visualization.events.addListener(chart, 'onmouseover', function(e) {

      if (placemark2 == null) {
		var point = ge.createPoint('');
		placemark2 = ge.createPlacemark('');
  ge.getFeatures().appendChild(placemark2);

  // Create style map for placemark2
  var icon = ge.createIcon('');
  icon.setHref('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
  var style = ge.createStyle('');
  style.getIconStyle().setIcon(icon);
  placemark2.setStyleSelector(style);

  // Create point
 
  point.setLatitude(elevations[e.row].location.lat());
  point.setLongitude(elevations[e.row].location.lng());

  placemark2.setGeometry(point);
			
			event.preventDefault();
            ge.setBalloon(null);
      } else {

var point = placemark2.getGeometry();

        point.setLatitude(elevations[e.row].location.lat());
        point.setLongitude(elevations[e.row].location.lng());
		
		
		
		
      }
    });
	
	
	google.earth.addEventListener(ge.getGlobe(), 'dblclick', eventHandler);
	
    // add some layers

     ge.getLayerRoot().enableLayerById(ge.LAYER_TERRAIN, true);
    
	 // Sample KML taken from
      //   http://code.google.com/apis/kml/documentation/kml_tut.html#polygons
	  if (document.getElementById('district').value != '' ){
         var link = ge.createLink('');
		 var column2 = document.getElementById('district').value;
         var href = 'http://www.prism.gatech.edu/~gzhang60/Gorillar/doc_' + column2 + '.kml';
		 
         link.setHref(href);
         var networkLink = ge.createNetworkLink('');
         networkLink.set(link, true, true); // Sets the link, refreshVisibility, and flyToView.
         ge.getFeatures().appendChild(networkLink);
		 
		 var link2 = ge.createLink('');
		 var column2 = document.getElementById('district').value;
         var href2 = 'http://www.prism.gatech.edu/~gzhang60/Gorillar/gorilla_move_' + column2 +  '_line.kml';
		 
         link2.setHref(href2);
         var networkLink2 = ge.createNetworkLink('');
         networkLink2.set(link2, true, true); // Sets the link, refreshVisibility, and flyToView.
         ge.getFeatures().appendChild(networkLink2);
		 
		 lineStringPlacemark = ge.createPlacemark('');
		 lineString = ge.createLineString('');
         lineStringPlacemark.setGeometry(lineString);
		 }
		 
		/* if (networkLink){
	     google.earth.addEventListener(networkLink, 'click', function(event) {
		  
            var placemark = event.getTarget();
			var lat = placemark.getGeometry().getLatitude();
            var lng = placemark.getGeometry().getLongitude();
			var coordinate = new google.maps.LatLng(lat, lng);
			lineString.getCoordinates().pushLatLngAlt(lat, lng,0);
			lineStringPlacemark.setStyleSelector(ge.createStyle(''));
            var lineStyle = lineStringPlacemark.getStyleSelector().getLineStyle();
            lineStyle.setWidth(5);
            lineStyle.getColor().set('9900ffff');
			ge.getFeatures().appendChild(lineStringPlacemark);
			coordinates.push(coordinate);
			updateElevation();
			event.preventDefault();
            ge.setBalloon(null);
	
              });		  
           }*/
    // Fly to the Grand Canyon
    var la = ge.createLookAt('');
    la.set(-1.472, 29.488, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, 
           -30, 40, 10000);
    ge.getView().setAbstractView(la);

    // listen to the click event on the globe and window
reset();
  }
  
  function failureCB(errorCode) {
  }

  function updateElevation() {
    
        var latlngs = [];
        for (var i in coordinates) {
          latlngs.push(coordinates[i])
        }
        elevationService.getElevationAlongPath({
         'path': latlngs,
          'samples': SAMPLES
        }, plotElevation);
      
    
  }
  


  function plotElevation(results) {
    elevations = results;
     
    var path = [];
    for (var i = 0; i < results.length; i++) {
      path.push(elevations[i].location);
    }
   
    if (polyline) {
      polyline.setMap(null);
    }
    
    polyline = new google.maps.Polyline({
      path: path,
      strokeColor: "#000000",
      map: map});
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Sample');
    data.addColumn('number', 'Elevation');
    for (var i = 0; i < results.length; i++) {
      data.addRow(['', elevations[i].elevation]);
    }

    document.getElementById('chart_div').style.display = 'block';
    chart.draw(data, {
      width: 970,
      height: 200,
      legend: 'none',
      titleY: 'Elevation (m)',
      focusBorderColor: '#00ff00'
    });
  }
  
  
      function reset() {
      var features = ge.getFeatures();
  while (features.getLastChild() != null)
  {
    features.removeChild(features.getLastChild());
  }
    
    coordinates = [];
    lineString = [];
	lineStringPlacemark =[];
	lineStringPlacemark = ge.createPlacemark('');
		 lineString = ge.createLineString('');
         lineStringPlacemark.setGeometry(lineString);
		 
    document.getElementById('chart_div').style.display = 'none';
  }
   google.setOnLoadCallback(init);