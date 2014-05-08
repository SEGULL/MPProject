/**
*	Funciones para el manejo de objeto XMLHttpRequest
*	y manejo del response XML .
*/

function newXMLHttpRequest() {
	var xmlhttp;
	try {
		// Mozilla / Safari / IE7
		xmlhttp = new XMLHttpRequest();
	} catch (e) {
		// IE
		var XMLHTTP_IDS = new Array('MSXML2.XMLHTTP.5.0',
								 	'MSXML2.XMLHTTP.4.0',
								 	'MSXML2.XMLHTTP.3.0',
								 	'MSXML2.XMLHTTP',
								 	'Microsoft.XMLHTTP' );
		var success = false;
		for (var i=0;i < XMLHTTP_IDS.length && !success; i++) {
			try {
				xmlhttp = new ActiveXObject(XMLHTTP_IDS[i]);
				success = true;
		   	} catch (e) {}
		}
		
		if (!success) {
	  		throw new Error('No es posible crear objeto XMLHttpRequest.');
		}
	}
	return xmlhttp;
 }

function getReadyStateHandler(req, responseXmlHandler) {
	return function () {
		if (req.readyState == 4) {
			if (req.status == 200) {
	     		responseXmlHandler(req.responseXML);
			} else {
				alert("Error HTTP "+req.status+": "+req.statusText);
       		}
     	}
   	}
 }
