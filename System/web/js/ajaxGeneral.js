function notificaciones(contextPath) {
    var req = newXMLHttpRequest();
    var oc=1;
    req.onreadystatechange = getReadyStateHandler(req,resultadonotificaciones);
    req.open("POST", contextPath+"/ServletConsultaIncidencias", true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("oc="+oc);

}

function resultadonotificaciones(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("resultado")[0].firstChild.nodeValue;
    // var ress = respuesta.getElementsByTagName("resta")[0].firstChild.nodeValue;

    if(res!="NO"){
        if(res!="" && res!="0" && res!="NO"){
            $('#two').jGrowl(res);
        }
    }
}

function estadoincidencia(contextPath,idLogistica,idOb,tipo,Observacion) {
    var req = newXMLHttpRequest();
    var oc=2;
    req.onreadystatechange = getReadyStateHandler(req,resultadoestadoincidencia);
    req.open("POST", contextPath+"/ServletValidaReprogramacion", true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("oc="+oc+"&idLogistica="+idLogistica+"&idOb="+idOb+"&tipo="+tipo+"&Observacion="+Observacion);

}

function resultadoestadoincidencia(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("res")[0].firstChild.nodeValue;
    //var valor = respuesta.getElementsByTagName("valor")[0].firstChild.nodeValue;

    if(res=="true"){
        Sexy.info("Se atendio la solicitud de incidencia correctamente");
        window.setInterval(window.parent.SexyLightbox.close(),3000);
    //window.location.action=valor+"/jsp/Evaluacion/DireccionEvaluacion/JspValidarReprogramacion.jsp?res=true"
    }else{

}
}


function loginestado(contextPath,idLogin,estado) {
    var req = newXMLHttpRequest();
    var change=1;
    req.onreadystatechange = getReadyStateHandler(req,resultadologinestado);
    req.open("POST", contextPath+"/ServletAdminUsuariosGeneral", true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("change="+change+"&idLogin="+idLogin+"&estado="+estado);

}

function resultadologinestado(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("resultado")[0].firstChild.nodeValue;


    if(res=="Se actualizó correctamente el estado"){
        Sexy.info(res);
        
    }else{
        Sexy.error(res);
    }
    window.setInterval("miFuncion()",3000);
}

function loginestadodep(contextPath,idLogin,estado) {
    var req = newXMLHttpRequest();
    var change=1;
    req.onreadystatechange = getReadyStateHandler(req,resultadologinestadodep);
    req.open("POST", contextPath+"/ServletUsuarioDependencias", true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("change="+change+"&idLogin="+idLogin+"&estado="+estado);

}

function resultadologinestadodep(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("resultado")[0].firstChild.nodeValue;


    if(res=="Se actualizó correctamente el estado"){
        Sexy.info(res);
        
    }else{
        Sexy.error(res);
    }
    window.setInterval("miFunciondep()",3000);
}

function validaFechaBitacora(contextPath,fecha,servlet) {
    var req = newXMLHttpRequest();
    var oc=1;
    req.onreadystatechange = getReadyStateHandler(req,resultadovalidaFechaBitacora);
    req.open("POST", contextPath+"/"+servlet, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("fecha="+fecha+"&oc="+oc);

}

function resultadovalidaFechaBitacora(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("resultado")[0].firstChild.nodeValue;

    if(res=="Resultado es true"){
        consultaFechasBitacora();
    }else{
        Sexy.alert("La fecha seleccionada es mayor al día de hoy.");
    }
}

function validaFechaBitacoraIncidencia(contextPath,fecha,servlet) {
    var req = newXMLHttpRequest();
    var oc=1;
    req.onreadystatechange = getReadyStateHandler(req,resultadovalidaFechaBitacoraIncidencia);
    req.open("POST", contextPath+"/"+servlet, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("fecha="+fecha+"&oc="+oc);

}

function resultadovalidaFechaBitacoraIncidencia(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("resultado")[0].firstChild.nodeValue;

    if(res=="Resultado es true"){
        consultaFechas();
    }else{
        Sexy.alert("La fecha seleccionada es mayor al día de hoy.");
    }
}

function validaFechaBitacoraIncidencias(contextPath,fecha,servlet) {
    var req = newXMLHttpRequest();
    var oc=1;
    req.onreadystatechange = getReadyStateHandler(req,resultadovalidaFechaBitacoraIncidencias);
    req.open("POST", contextPath+"/"+servlet, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send("fecha="+fecha+"&oc="+oc);

}

function resultadovalidaFechaBitacoraIncidencias(respuestaXML){
    var resp_xml = respuestaXML;
    var respuesta = resp_xml.getElementsByTagName("respuesta")[0];
    var res = respuesta.getElementsByTagName("resultado")[0].firstChild.nodeValue;

    if(res=="Resultado es true"){
        consultaFechasIncidencia();
    }else{
        Sexy.alert("La fecha seleccionada es mayor al día de hoy.");
    }
}

function validaFechas(fInicio, fFin){
        
    if(fInicio=="" || fInicio==null || fInicio=="null"){
    }else if(fFin==""  || fFin==null || fFin=="null"){
    }else{

        fInicio=fInicio.split('/');
        var Diai=fInicio[0];
        var Mesi=fInicio[1];
        var Anioi=fInicio[2];

        fFin=fFin.split('/');
        var Diaf=fFin[0];
        var Mesf=fFin[1];
        var Aniof=fFin[2];


        if(fInicio[2] > fFin[2]){
            Sexy.alert("La fecha de inicio no debe ser mayor que la fecha final");
            return false;
        }else if(fInicio[2] == fFin[2]){
            if(fInicio[1] > fFin[1]){
                Sexy.alert("La fecha de inicio no debe ser mayor que la fecha final");
                return false;
                    
            }else if(fInicio[1] == fFin[1]){
                if(fInicio[0] > fFin[0]){
                    Sexy.alert("La fecha de inicio no debe ser mayor que la fecha final");
                    return false;
                }
                return true;
            }
            return true;
        }
    }
}
    
