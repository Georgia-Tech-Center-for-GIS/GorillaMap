  var COLUMN_STYLESG = {
    'BEE':[{
		'att': 'BEE',
		'color':'#994D52',
		'opacity': 0.8
		}],
    'BWE':[{
		'att': 'BWE',
		'color':'#D9742B',
		'opacity': 0.8
		}],
	'INS':[{
		'att': 'INS',
		'color':'#E6B450',
		'opacity': 0.8		
		}],
	'ISA':[{
		'att': 'ISA',
		'color':'#11406C',
		'opacity': 0.8		
		}],
	'KUY':[{
		'att': 'KUY',
		'color':'#FC9D9A',
		'opacity': 0.8		
		}],
	'NTA':[{
		'att': 'NTA',
		'color':'#3EB47E',
		'opacity': 0.8		
		}],
	'PAB':[{
		'att': 'PAB',
		'color':'#BDBD77',
		'opacity': 0.8		
		}],
	'SHI':[{
		'att': 'SHI',
		'color':'#F6B17E',
		'opacity': 0.8		
		}],
	'TIT':[{
		'att': 'TIT',
		'color':'#489BB1',
		'opacity': 0.8		
		}],
	'UGE':[{
		'att': 'UGE',
		'color':'#000000 ',
		'opacity': 0.8		
		}],
	'URU':[{
		'att': 'URU',
		'color':'#FFFFFF',
		'opacity': 0.8		
		}]  
  }

  var COLUMN_STYLES = {
        'SUMT':[
		{
		 'min': 0,
            'max': 3,
			'color':'#CC3300',
		'opacity': 0.8},
		{
		 'min': 3,
            'max': 17.8,
			'color':'#A32900',
		'opacity': 0.8},
		{
		 'min': 17.8,
            'max': 91.4,
			'color':'#7A1F00',
		'opacity': 0.8},
		{
		 'min': 91.4,
            'max': 658.5,
			'color':'#521400',
		'opacity': 0.8},
		],
		
        'GALT': [
          {
		 'min': 0,
            'max': 1.2,
			'color':'#CC3300',
		'opacity': 0.8},
		{
		 'min': 1.2,
            'max': 2.3,
			'color':'#A32900',
		'opacity': 0.8},
		{
		 'min': 2.3,
            'max': 4.7,
			'color':'#7A1F00',
		'opacity': 0.8},
		{
		 'min': 4.7,
            'max': 31.8,
			'color':'#521400',
		'opacity': 0.8},
        ],
        'PLIT': [
          {
		 'min': 0,
            'max': 16.7,
			'color':'#CC3300',
		'opacity': 0.8},
		{
		 'min': 16.7,
            'max': 47.2,
			'color':'#A32900',
		'opacity': 0.8},
		{
		 'min': 47.2,
            'max': 85.3,
			'color':'#7A1F00',
		'opacity': 0.8},
		{
		 'min': 85.3,
            'max': 284.6,
			'color':'#521400',
		'opacity': 0.8},
        ],
		'CRNT': [
          {
		 'min': 0,
            'max': 26.1,
			'color':'#CC3300',
		'opacity': 0.8},
		{
		 'min': 26.1,
            'max': 83.5,
			'color':'#A32900',
		'opacity': 0.8},
		{
		 'min': 83.5,
            'max': 161.5,
			'color':'#7A1F00',
		'opacity': 0.8},
		{
		 'min': 161.5,
            'max': 658.5,
			'color':'#521400',
		'opacity': 0.8},
        ]
      };
	  
var tableIDG = '1gTWyh-9ovA4SPD3wAVNAkZb_kDdQ2YnHUh0louiR';


function gorillaselect() {
    document.getElementById('move').checked = true;
	document.getElementById('food').checked = true;
    filterMapG();
filtpolygon();

	
		for (column in COLUMN_STYLES){
				  break;
				}
		addLegend();
		
		updateLegend(column);
		
		for (column2 in COLUMN_STYLESG){
				  break;
				}				
		addLegend2();
		
		updateLegend2(column2);
		
var selectedColumn = document.getElementById('selectorB').value;
		applyStyle(map, layer, selectedColumn);	 
		
		


	google.maps.event.addDomListener(document.getElementById('food'),
	'click', function() {
$(function(){

				$('#vtab>ul>li').removeClass('selected');
                $('#vtab>ul>li:last').addClass('selected');

                var index = $('#vtab>ul>li').index($('#vtab>ul>li:last'));
                $('#vtab>div').hide().eq(index).show();
});
	filterMapG();
var selectedColumn = document.getElementById('selectorB').value;
	applyStyle(map, layer, selectedColumn);	 
	
});

	google.maps.event.addDomListener(document.getElementById('status'),'change', function() {
					$(function(){
				$('#vtab>ul>li').removeClass('selected');
                $('#vtab>ul>li:first').addClass('selected');

                var index = $('#vtab>ul>li').index($('#vtab>ul>li:first'));
                $('#vtab>div').hide().eq(index).show();
});
if (countrys){
for(var i in countrys){
countrys[i].setMap(null);
}
}
			filtpolygon();
    drawtablemm();	
	});
	
	google.maps.event.addDomListener(document.getElementById('selector'),'change', function() {
				$(function(){
				$('#vtab>ul>li').removeClass('selected');
                $('#vtab>ul>li:first').addClass('selected');

                var index = $('#vtab>ul>li').index($('#vtab>ul>li:first'));
                $('#vtab>div').hide().eq(index).show();
});
if (countrys){
for(var i in countrys){
countrys[i].setMap(null);
}
}
	filtpolygon();

    drawtablemm();	
	});
	
	google.maps.event.addDomListener(document.getElementById('district'),'change', function() {
				$(function(){
				$('#vtab>ul>li').removeClass('selected');
                $('#vtab>ul>li:first').addClass('selected');

                var index = $('#vtab>ul>li').index($('#vtab>ul>li:first'));
                $('#vtab>div').hide().eq(index).show();
});
if (countrys){
for(var i in countrys){
countrys[i].setMap(null);
}
}
	
	filtpolygon();	

var column2 = document.getElementById('district').value;		
updateLegend2(column2);		
    drawtablemm();	
	});

	google.maps.event.addDomListener(document.getElementById('selectorB'),'change', function() {			
				
				$(function(){
				$('#vtab>ul>li').removeClass('selected');
                $('#vtab>ul>li:last').addClass('selected');

                var index = $('#vtab>ul>li').index($('#vtab>ul>li:last'));
                $('#vtab>div').hide().eq(index).show();
});
var selectedColumn = document.getElementById('selectorB').value;
		applyStyle(map, layer, selectedColumn);	 
		updateLegend(selectedColumn);
				drawTableB();
				});
				
	drawtablemm();
	drawTableB();
	

				
}

function filterMapG() {        
       var where = generateWhere();
			
        if (where) {
          if (!layer.getMap()) {
            layer.setMap(map);
          }
          layer.setOptions({
            query: {
              select: 'geometry',
              from: tableIDG,
			  where: where,
              },
suppressInfoWindows:true
			
          });
        } else {
          layer.setMap(null);
        }		
      }
	  
function filtpolygon(){
wherepolygon = generateWheremove();

var ttgg2 = document.getElementById('status').value;
		if (ttgg2) {
        var filter2 = [];		
		var status = document.getElementById('status');
		if (wherepolygon == []) {
		for (var i=0; i<status.options.length; i++) {
		if (status.options[i].selected) {
		var storeName2 = status.options[i].value.replace(/'/g, '\\\'');
         filter2.push("'" + storeName2 + "'");	
          }
        }
		
		

		if (filter2.length) {
		wherepolygon = " 'Year' IN (" + filter2.join(',') + ')';
        }
		}else {
		for (var i=0; i<status.options.length; i++) {
		if (status.options[i].selected) {
		var storeName2 = status.options[i].value.replace(/'/g, '\\\'');
         filter2.push("'" + storeName2 + "'");	
          }
        }
		
		if (filter2.length) {
          wherepolygon += " AND 'Year' IN (" + filter2.join(',') + ')';
        }
		
		}	
		}
		
		
		var ttgg3 = document.getElementById('selector').value;
		if (ttgg3) {
        var filter3 = [];		
		var selector = document.getElementById('selector');
		if (wherepolygon == []) {
		for (var i=0; i<selector.options.length; i++) {
		if (selector.options[i].selected) {
		var storeName3 = selector.options[i].value.replace(/'/g, '\\\'');
         filter3.push("'" + storeName3 + "'");	
          }
        }
		
		

		if (filter3.length) {
		wherepolygon = " 'Range' =  '"+ ttgg3 + "'"
        }
		}else {
		for (var i=0; i<selector.options.length; i++) {
		if (selector.options[i].selected) {
		var storeName3 = selector.options[i].value.replace(/'/g, '\\\'');
         filter3.push("'" + storeName3 + "'");	
          }
        }
		
		if (filter3.length) {
          wherepolygon += " AND 'Range' =  '"+ ttgg3 + "'"
        }
		
		}	
		}
		
		
		
		
		
		var ttgg = document.getElementById('district').value;
		if (ttgg) {
        var filter = [];		
		var district = document.getElementById('district');
		if (wherepolygon == []) {
		for (var i=0; i<district.options.length; i++) {
		if (district.options[i].selected) {
		var storeName = district.options[i].value.replace(/'/g, '\\\'');
         filter.push("'" + storeName + "'");	
          }
        }
		
		

		if (filter.length) {
		wherepolygon = " 'Type' IN (" + filter.join(',') + ')';
        }
		}else {
		for (var i=0; i<district.options.length; i++) {
		if (district.options[i].selected) {
		var storeName = district.options[i].value.replace(/'/g, '\\\'');
         filter.push("'" + storeName + "'");	
          }
        }
		
		if (filter.length) {
          wherepolygon += " AND 'Type' IN (" + filter.join(',') + ')';
        }
		}	
		}
		

		
        var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = 'SELECT Type,geometry FROM ' +
            '1gTWyh-9ovA4SPD3wAVNAkZb_kDdQ2YnHUh0louiR' + ' Where ' + wherepolygon;
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap');
        url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
				

}	  

function drawMap(data) {
	countrys=[];
	var rows = data['rows'];
	for (var i in rows) {
	if (rows[i][0] != 'Antarctica') {
		var newCoordinates = [];
		var geometries = rows[i][1]['geometries'];
		if (geometries) {
		  for (var j in geometries) {
			newCoordinates.push(constructNewCoordinates(geometries[j]));
		  }
		} else {
		  newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
		}
		
		
		var tt = rows[i][0];		
		var columnStyle = COLUMN_STYLESG[tt];		
		for (var i in columnStyle) {
        var style = columnStyle[i];		           		
		country = new google.maps.Polygon({
		  paths: newCoordinates,
		  strokeColor: style.color,
		  strokeOpacity: 1,
		  strokeWeight: 1,
		  fillColor: style.color,
		  fillOpacity: 0.5
		});
		
		}
		
		countrys.push(country);

		google.maps.event.addListener(country, 'mouseover', function() {
		  this.setOptions({fillOpacity: 1});
		});
		google.maps.event.addListener(country, 'mouseout', function() {
		  this.setOptions({fillOpacity: 0.5});
		});

		country.setMap(map);


		
		}
		}

		
	if ( wherepolygon == "'move_food' =  'food'"){if (countrys){
	for(var i in countrys){
	countrys[i].setMap(null);
	}}
	
	     	


				
	};
}

function constructNewCoordinates(polygon) {
	var newCoordinates = [];
	var coordinates = polygon['coordinates'][0];
	for (var i in coordinates) {
	  newCoordinates.push(
		  new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
	}
	return newCoordinates;
}
	  
function applyStyle(map, layer, column) {	
        var columnStyle = COLUMN_STYLES[column];
        var styles = [];
		styles.push({ 
			polygonOptions: {			
    fillColor: "#BBAD09",
	strokeOpacity:1,
	strokeColor:"#BBAD09",
	strokeWeight:1,
    fillOpacity: 0.001
  }
  });
        for (var i in columnStyle) {
          var style = columnStyle[i];
		 
          styles.push({
            where:condition(column, style.min, style.max),	
            polygonOptions: {
              fillColor: style.color,
			  strokeColor:style.color,
              fillOpacity: style.opacity,
			  strokeOpacity:1,
	          strokeWeight:1
            }
          });		   
        }      
        layer.set('styles', styles);
		
      }

function applyStyleslider(map, layer, column,slider) {	
        var columnStyle = COLUMN_STYLES[column];
        var styles = [];
		styles.push({ 
			polygonOptions: {			
    fillColor: "#BBAD09",
	strokeOpacity:slider,
	strokeColor:"#BBAD09",
	strokeWeight:1,
    fillOpacity: 0.001
  }
  });
        for (var i in columnStyle) {
          var style = columnStyle[i];
		 
          styles.push({
            where:condition(column, style.min, style.max),	
            polygonOptions: {
              fillColor: style.color,
			  strokeColor:style.color,
              fillOpacity: slider,
			  strokeOpacity:slider,
	          strokeWeight:1
            }
          });		   
        }      
        layer.set('styles', styles);
		
      }
	  
function conditionG(columnName, high) {
        var whereClause = [];	
        whereClause.push("'");
        whereClause.push(columnName);		
        whereClause.push("' = '");
        whereClause.push(high);
		whereClause.push("'");
        return whereClause.join('');	
		
}

function condition(columnName, low, high) {
        var whereClause = [];		
        whereClause.push("'");
        whereClause.push(columnName);		
        whereClause.push("' > ");
        whereClause.push(low);
        whereClause.push(" AND '");
        whereClause.push(columnName);
        whereClause.push("' <= ");
        whereClause.push(high);	
        return whereClause.join('');	
      }

function generateWhere() {
        var filter = [];
        var stores = document.getElementsByName('store');
        for (var i = 0, store; store = stores[i]; i++) {
          if (store.checked) {
            var storeName = store.value.replace(/'/g, '\\\'');
			
            filter.push("'" + storeName + "'");
          }
        }
        var where = '';
        if (filter.length) {
          where = "'move_food' IN (" + filter.join(',') + ')';
        }
        return where;
      }

function generateWheremove(){
        var filter = [];
        var stores = document.getElementsByName('store1');
        for (var i = 0, store; store = stores[i]; i++) {
          if (store.checked) {
            var storeName = store.value.replace(/'/g, '\\\'');
			
            filter.push("'" + storeName + "'");
          }
        }
        var where = '';
        if (filter.length) {
          where = "'move_food' =  '"+ storeName + "'"
        }else{where = "'move_food' =  'food'"
		}
		
        return where;
}
	  
function initSelectmenu() {
        var selectMenu = document.getElementById('selectorB');
        for (column in COLUMN_STYLES) {
          var option = document.createElement('option');
          option.setAttribute('value', column);
          option.innerHTML = column;         
        }
      }
	  
function addLegend() {
        var legendWrapper = document.createElement('div');
        legendWrapper.id = 'legendWrapper';
        legendWrapper.index = 1;
        legendContent(legendWrapper, column);
      }

function updateLegend(column) {
        var legendWrapper = document.getElementById('legendWrapper');
        var legend = document.getElementById('legend');
        legendWrapper.removeChild(legend);
        legendContent(legendWrapper, column);
      }

function legendContent(legendWrapper, column) {      
	   var legend = document.createElement('div');
        legend.id = 'legend';
        var title = document.createElement('p');
        title.innerHTML = column;
		if (column == 'SUMT'){title.innerHTML = 'SUMT';}
		if (column == 'GALT'){title.innerHTML = 'GAL';}
		if (column == 'PLIT'){title.innerHTML = 'PLI';}
		if (column == 'CRNT'){title.innerHTML = 'CRN';}
		
        legend.appendChild(title);
        var columnStyle = COLUMN_STYLES[column];
        for (var i in columnStyle) {
		
          var style = columnStyle[i];
          var legendItem = document.createElement('div');
          var color = document.createElement('span');
          color.setAttribute('class', 'color');
          color.style.backgroundColor = style.color;
          legendItem.appendChild(color);
          var minMax = document.createElement('sspan');
          minMax.innerHTML = style.min + ' - ' + style.max;
          legendItem.appendChild(minMax);
          legend.appendChild(legendItem);
        
        legendWrapper.appendChild(legend);}
      }
	  
function addLegend2() {
        var legendWrapper2 = document.createElement('div');
        legendWrapper2.id = 'legendWrapper2';
        legendWrapper2.index = 1;
        legendContent2(legendWrapper2, column);
      }

function updateLegend2(column) {

        var legendWrapper2 = document.getElementById('legendWrapper2');
        var legend = document.getElementById('legend2');
        legendWrapper2.removeChild(legend);
        legendContent2(legendWrapper2, column);
      }

function legendContent2(legendWrapper2, column) {      
	   var legend = document.createElement('div');
        legend.id = 'legend2';
        var title = document.createElement('p');
        title.innerHTML = 'Type';
        legend.appendChild(title);
		
	    
        var filter = [];		
		var district = document.getElementById('district');
		for (var i=0; i<district.options.length; i++) {
		if (district.options[i].selected) {
		var storeName = district.options[i].value.replace(/'/g, '\\\'');
         filter.push(storeName);	
          }
        }
		

		  
		 if (filter == '') {
		  for (var i in COLUMN_STYLESG){
		  var columnStyle = COLUMN_STYLESG[i];
		  for (var i in columnStyle) {
		  var style = columnStyle[i];
          var legendItem = document.createElement('div');
          var color = document.createElement('span');
          color.setAttribute('class', 'color');
          color.style.backgroundColor = style.color;
          legendItem.appendChild(color);
          var minMax = document.createElement('sspan');
          minMax.innerHTML = style.att;
          legendItem.appendChild(minMax);
          legend.appendChild(legendItem);
          legendWrapper2.appendChild(legend);
		  }}
		  }else{ 
		for (var j in filter) {
        var columnStyle = COLUMN_STYLESG[filter[j]];
        for (var i in columnStyle) {		
          var style = columnStyle[i];
          var legendItem = document.createElement('div');
          var color = document.createElement('span');
          color.setAttribute('class', 'color');
          color.style.backgroundColor = style.color;
          legendItem.appendChild(color);
          var minMax = document.createElement('sspan');
          minMax.innerHTML = style.att;
          legendItem.appendChild(minMax);
          legend.appendChild(legendItem);
          legendWrapper2.appendChild(legend);}}
		  }
      }
	  
function drawTableB(){
var selectorB = document.getElementById('selectorB').value;
var query = "SELECT 'Plot' as 'Plot','Location' as 'Location', 'GALT' as 'GAL', 'PLIT' as 'PLI', 'CRNT' as 'CRN', 'SUMT' as 'SUM' FROM "+ tableIDG +" WHERE  'move_food' = 'food'";
var queryText = encodeURIComponent(query);		
var gvizQuery = new google.visualization.Query('http://www.google.com/fusiontables/gvizdata?tq=' + queryText);
var withchart= 478;
var heghchart= 282;

        gvizQuery.send(function(response) {
		var testData = response.getDataTable();		
		var tableView = new google.visualization.DataView(testData);
		if (selectorB == 'SUMT') {
        tableView.setColumns([0,1,2,3,4,5]);		 
		
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
	  
	  		if (selectorB == 'GALT') {
        tableView.setColumns([0,1,2]);		 
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
		  
		  		if (selectorB == 'PLIT') {
        tableView.setColumns([0,1,3]);		 
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
		  
		  		if (selectorB == 'CRNT') {
        tableView.setColumns([0,1,4]);		 
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
		  
		var chartView = new google.visualization.DataView(testData);
         
		 if (selectorB == 'SUMT') {
		 chartView.setColumns([0,1,5]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		 chart.draw(chartView, {title: "",	
width: withchart, height: heghchart,		 
                      vAxis: {title: 'Bio_mass', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  })}

				 if (selectorB == 'GALT') {
		 chartView.setColumns([0,1,2]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		 chart.draw(chartView, {title: "",		
width: withchart, height: heghchart,		 
                      vAxis: {title: 'GAL', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  })}

		 if (selectorB == 'PLIT') {
		 chartView.setColumns([0,1,3]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		 chart.draw(chartView, {title: "",	
width: withchart, height: heghchart,		 
                      vAxis: {title: 'PLI', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  })}

		 if (selectorB == 'CRNT') {
		 chartView.setColumns([0,1,4]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		 chart.draw(chartView, {title: "",				
width: withchart, height: heghchart,		 
                      vAxis: {title: 'CRN', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  })}

google.visualization.events.addListener(table, 'select',
            function() {
			var selection1 = table.getSelection();
            var where = [];
			for (var i = 0; i < selection1.length; i++) {
			var item1 = selection1[i];
			var eerrt = tableView.getValue(item1.row, 0);
			var eerrt2 = tableView.getValue(item1.row, 1);
			
			where = "Plot = '"+ eerrt + "' AND Location = '" + eerrt2 + "'";
	
        if (where) {
          if (!layer.getMap()) {
            layer.setMap(map);
          }
          layer.setOptions({
            query: {
              select: 'geometry',
              from: tableIDG ,
			  where: "'move_food' = 'food'"
              },
		styles: [{ 
			polygonOptions: {			
    fillColor: "#FFFFFF",
    strokeOpacity:1,
  strokeWeight:1,
    fillOpacity: 0.7
  }
  },{
  where: where,
            polygonOptions: {
              fillColor: '#521400',
          strokeOpacity:1,
		  strokeColor:'#521400',
  strokeWeight:100,
        fillOpacity: 1
            }
          }],
			suppressInfoWindows:true
          });
        } else {
          layer.setMap(null);
        }
		


		  

			}
			
        chart.setSelection([{row:item1.row,column:null}]); 
            });
	

google.visualization.events.addListener(chart, 'onmouseover',
            function(e) { 
			chart.setSelection([e]);
			var selection = chart.getSelection();	
			var where = [];		
			for (var i = 0; i < selection.length; i++) {			
			var item = selection[i];		    
			if (item.row != null){
			var uuiit = chartView.getValue(item.row, 0);
			var uuiit2 = chartView.getValue(item.row, 1);
			
			 where = "Plot = '"+ uuiit + "' AND Location = '" + uuiit2 + "'";}
			  
        if (where) {
          if (!layer.getMap()) {
            layer.setMap(map);
          }
          layer.setOptions({
            query: {
              select: 'geometry',
              from: tableIDG ,
			  where: "'move_food' = 'food'"
              },
		styles: [{ 
			polygonOptions: {			
    fillColor: "#FFFFFF",
    strokeOpacity:1,
  strokeWeight:1,
    fillOpacity: 0.7
  }
  },{
  where: where,
            polygonOptions: {
              fillColor: '#521400',
          strokeOpacity:1,
		  strokeColor:'#521400',
  strokeWeight:100,
        fillOpacity: 1
            }
          }],
			suppressInfoWindows:true
          });
        } else {
          layer.setMap(null);
        }
		
	

if (item.row != null){
			table.setSelection([{row:item.row}]);	
			
			}
			
			
			}})
			  })

}
	  
function drawtablemm() {
var where = []
		
var ttgg2 = document.getElementById('status').value;
		if (ttgg2) {
        var filter2 = [];		
		var status = document.getElementById('status');
		if (where == []) {
		for (var i=0; i<status.options.length; i++) {
		if (status.options[i].selected) {
		var storeName2 = status.options[i].value.replace(/'/g, '\\\'');
         filter2.push("'" + storeName2 + "'");	
          }
        }
		
		filter2.push("'" +'0' + "'");

		if (filter2.length) {
		where = " AND 'Year' IN (" + filter2.join(',') + ')'
        }
		}else {
		for (var i=0; i<status.options.length; i++) {
		if (status.options[i].selected) {
		var storeName2 = status.options[i].value.replace(/'/g, '\\\'');
         filter2.push("'" + storeName2 + "'");	
          }
        }
		filter2.push("'" +'0' + "'");
		if (filter2.length) {
          where += " AND 'Year' IN (" + filter2.join(',') + ')'
        }
		
		}	
		}
		
		
		var ttgg3 = document.getElementById('selector').value;
		if (ttgg3) {
        var filter3 = [];		
		var selector = document.getElementById('selector');
		if (where == []) {
		for (var i=0; i<selector.options.length; i++) {
		if (selector.options[i].selected) {
		var storeName3 = selector.options[i].value.replace(/'/g, '\\\'');
         filter3.push("'" + storeName3 + "'");	
          }
        }
		
		filter3.push("'" +'1000000%' + "'");

		if (filter3.length) {
		where = " AND 'Range' IN (" + filter3.join(',') + ')'
        }
		}else {
		for (var i=0; i<selector.options.length; i++) {
		if (selector.options[i].selected) {
		var storeName3 = selector.options[i].value.replace(/'/g, '\\\'');
         filter3.push("'" + storeName3 + "'");	
          }
        }
		filter3.push("'" +'1000000%' + "'");
		if (filter3.length) {
          where += " AND 'Range' IN (" + filter3.join(',') + ')'
        }
		
		}	
		}
		
		
		
		
		
		var ttgg = document.getElementById('district').value;
		if (ttgg) {
        var filter = [];		
		var district = document.getElementById('district');
		if (where == []) {
		for (var i=0; i<district.options.length; i++) {
		if (district.options[i].selected) {
		var storeName = district.options[i].value.replace(/'/g, '\\\'');
         filter.push("'" + storeName + "'");	
          }
        }
		
		filter.push("'" +'1000000%' + "'");

		if (filter.length) {
		where = " AND 'Type' IN (" + filter.join(',') + ')'
        }
		}else {
		for (var i=0; i<district.options.length; i++) {
		if (district.options[i].selected) {
		var storeName = district.options[i].value.replace(/'/g, '\\\'');
         filter.push("'" + storeName + "'");	
          }
        }
		filter.push("'" +'1000000%' + "'");
		if (filter.length) {
          where += " AND 'Type' IN (" + filter.join(',') + ')'
        }
		}	
		}
	   
query = "SELECT 'Year' as 'Year','Type' as 'Type', 'Range' as 'Range','Group_Size' as 'Size','Area__SQKM' as 'Area(SQKM)','Area__Hect' as 'Area(HEC)' FROM " + tableIDG + " WHERE 'move_food' = 'move' " + where;	   

      
var queryText = encodeURIComponent(query);		
var gvizQuery = new google.visualization.Query('http://www.google.com/fusiontables/gvizdata?tq=' + queryText);
gvizQuery.send(function(response) {
		 var testData2 = response.getDataTable();		
		 var tableView2 = new google.visualization.DataView(testData2);
         tableView2.setColumns([0,1,2,3,4,5]);
         var table2 = new google.visualization.Table(
              document.getElementById('visualization2'));
          table2.draw(tableView2, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background2 ', headerCell: '', oddTableRow: 'tablerow2', tableRow: 'tablerow2',hoverTableRow:'', selectedTableRow:'red-select2',tableCell: 'gold-border2'},
          });	
		  
	google.visualization.events.addListener(table2, 'select',
            function() {
			if (countrys){
for(var i in countrys){
countrys[i].setMap(null);
}
}
			var selection1 = table2.getSelection();
            var where = [];
			for (var i = 0; i < selection1.length; i++) {
			var item1 = selection1[i];
			var eerrt = tableView2.getValue(item1.row, 0);
			var eerrt2 = tableView2.getValue(item1.row, 1);
			var eerrt3 = tableView2.getValue(item1.row, 2);
			
			where = "Year = '"+ eerrt + "' AND Type = '" + eerrt2 + "' AND Range = '" + eerrt3+"'";
	        
         var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = 'SELECT Type,geometry FROM ' +
            '1gTWyh-9ovA4SPD3wAVNAkZb_kDdQ2YnHUh0louiR' + ' Where ' + where;
        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=drawMap');
        url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
		


		  

			}})		
	});

	
}	  

 function addAddress() {
    var addressx = document.getElementById('address1').value;
	var addressy = document.getElementById('address2').value;
	var address = addressx+','+addressy;
map.setCenter(new google.maps.LatLng(addressx,addressy));
	map.setZoom(24);
  }
  
function addressKeyHandler(e) {
    var keycode;
    if (window.event) {
      keycode = window.event.keyCode;
    } else if (e) {
      keycode = e.which;
    } else {
      return true;
    }   
    if (keycode == 13) {
       addAddress();
       return false;
    } else {
       return true;
    }
 }
 
 function change(){
    var stores = document.getElementsByName('site');
	for (var i = 0, store; store = stores[i]; i++) {	
    if (store.checked) {if(store.value == 'male'){
        addAddress()
        }else{
		addUTM()}  
		}}

 }
 
 function eerr(){
 var stores = document.getElementsByName('site');
	for (var i = 0, store; store = stores[i]; i++) {	
    if (store.checked) {if(store.value == 'male'){
	   document.getElementById('address1').value = "-1.4874";
	   document.getElementById('address2').value = "29.4933";
        
        }else{
	   document.getElementById('address1').value = "775213";
	   document.getElementById('address2').value = "9837678";
		}  
		}}
	   }
	   
 function addUTM(){
    var UTMX = document.getElementById('address1').value;
	var UTMY = document.getElementById('address2').value;
    var utm = 'PROJCS["WGS 84 / UTM zone 35S",GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4326"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",27],PARAMETER["scale_factor",0.9996],PARAMETER["false_easting",500000],PARAMETER["false_northing",10000000],AUTHORITY["EPSG","32735"],AXIS["Easting",EAST],AXIS["Northing",NORTH]]';
    var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ";
	var address22 = proj4(utm,wgs84,[UTMX,UTMY]);
    var address = address22[1]+','+address22[0];
	map.setCenter(new google.maps.LatLng(address22[1],address22[0]));
	map.setZoom(24);
	
 }
 
function move() {
	$(function(){
					$('#vtab>ul>li').removeClass('selected');
					$('#vtab>ul>li:first').addClass('selected');

					var index = $('#vtab>ul>li').index($('#vtab>ul>li:first'));
					$('#vtab>div').hide().eq(index).show();
	});
		
	if (countrys){
	for(var i in countrys){
	countrys[i].setMap(null);
	}}
	
	
	filtpolygon();	

    drawtablemm();	
	
}

function drawTable2(Plot,Location){

var selector = document.getElementById('selectorB').value;

   query = "SELECT 'Plot' as 'Plot', 'GALT' as 'GAL', 'PLIT' as 'PLI', 'CRNT' as 'CRN', 'Location' as 'Location','SUMT' as 'SUM' FROM "+ tableIDG +" ";
   query += " WHERE 'Plot' = '" + Plot + "'"+"AND 'Location'='" + Location + "'";
        
   var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'http://www.google.com/fusiontables/gvizdata?tq=' + queryText);
   
        gvizQuery.send(function(response) {
        var testData = response.getDataTable();		
		var tableView = new google.visualization.DataView(testData);
		if (selector == 'SUMT') {
        tableView.setColumns([0,4,1,2,3,5]);		 
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
	  
	  		if (selector == 'GALT') {
        tableView.setColumns([0,4,1]);		 
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
		  
		  		if (selector == 'PLIT') {
        tableView.setColumns([0,4,2]);		 
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
		  
		  		if (selector == 'CRNT') {
        tableView.setColumns([0,4,3]);		 
        var table = new google.visualization.Table(document.getElementById('visualization'));			 
        table.draw(tableView, {allowHtml: true,
            showRowNumber: false, cssClassNames: {headerRow: 'orange-background ', headerCell: 'gold-border', oddTableRow: 'tablerow', tableRow: 'tablerow',hoverTableRow:'', selectedTableRow:'red-select',tableCell: 'gold-border',},
          });		}
        });
}

function drawVisualization(Plot,Location){
var withchart= 478;
var heghchart= 282;
var selector = document.getElementById('selectorB').value;
    var query = "SELECT 'Plot' as 'Plot', 'GALT' as 'GAL', 'PLIT' as 'PLI', 'CRNT' as 'CRN', 'Location' as 'Location','SUMT' as 'SUM' FROM "+ tableIDG +" ";
	query += " WHERE 'Plot' = '" + Plot + "'"+"AND 'Location'='" + Location + "'";
    		
	var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'http://www.google.com/fusiontables/gvizdata?tq=' + queryText);
        gvizQuery.send(function(response) {
		var testData = response.getDataTable();
		var chartView = new google.visualization.DataView(testData);
         
		 if (selector == 'SUMT') {
		 chartView.setColumns([0,5]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		  
		 chart.draw(chartView, {title: "",	
width: withchart, height: heghchart,		 
                      vAxis: {title: 'Bio_mass', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  });
					  }

				 if (selector == 'GALT') {
		 chartView.setColumns([0,1]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		 chart.draw(chartView, {title: "",		
width: withchart, height: heghchart,		 
                      vAxis: {title: 'GAL', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  })}

		 if (selector == 'PLIT') {
		 chartView.setColumns([0,2]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		 chart.draw(chartView, {title: "",	
width: withchart, height: heghchart,		 
                      vAxis: {title: 'PLI', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  })}

		 if (selector == 'CRNT') {
		 chartView.setColumns([0,3]);
         var chart = new google.visualization.ScatterChart(document.getElementById('chart'));	
		 chart.draw(chartView, {title: "",				
width: withchart, height: heghchart,		 
                      vAxis: {title: 'CRN', minValue: 0, maxValue: 15},
                      hAxis: {title: 'Plot', minValue: 0, maxValue: 15},
					  legend: 'none'
					  })}
        });
 }	