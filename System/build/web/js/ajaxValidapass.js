function validaContrasena(contextPath,olpass,usuario,pass) {
    var req = newXMLHttpRequest();
    var oc=1;
    req.onreadystatechange = getReadyStateHandler(req,resultadovalidaContrasena);
    req.open("POST", contextPath+"/ServletCambioPasswordGeneral", true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("txtPassword="+olpass+"&oc="+oc+"&Usuario="+usuario+"&pass="+pass);

}

function resultadovalidaContrasena(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("resultado")[0].firstChild.nodeValue;

   checaoldpass(res)

}
