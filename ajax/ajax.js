// Esta es la primera version del script

var ajax;
var response;
function AjaxRequest(dato){
//Verificar el requestXML;
	InicializarXMLRequest();
	//Parametros
	let url = 'data/datos.php';
	let method = 'POST';
	let params = 'name='+dato+'&apellido=glez';
	//Respuesta
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			response = ajax.responseText;
			retornar = response
			console.log("respuesta:", response);
		}
	};
	ajax.open(method, url, true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(params);

	
}

function InicializarXMLRequest(){
	if(window.XMLHttpRequest){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
}