function validarCampos(form,campos){
    /**
		*	validarCampos(<formulario>, <campos a validar>)
		*	Par�metros de validaci�n:
		*		+Requerido : se hace un Split que devuelve un array de tres posiciones
		*						p.e.(param,campo,mensaje)
		*		+Longitud  : se hace un Split que devuelve un array de cuatro posiciones
		*						p.e.(param,campo,long,mensaje)
		*		+email	   : se hace un Split que devuelve un array de tres posiciones
		*						p.e.(param,campo,mensaje)
		*		+Checked   : se hace un Split que devuelve un array de tres posiciones	
		*						p.e.(param,campo,mensaje)
		*		+Password  : se hace un split que devuelve un array de cuatro posiciones
		*						p.e. (param,campo_passwd1,campo_passwd2,mensaje)
		*		+Fechas	   : se hace un split que devuelve un array de cuatro posiciones
		*						p.e. (param,campo_fecha1,campo_fecha2,mensaje)
                *               +NumeroRequerido
		*/
    var fields = campos;
    for(i = 0 ; i < fields.length ; i++){
        var posValida = fields[i].split(",");
			
        var tipoValidacion = posValida[0];
        var campo = "";
        var mensaje = "";
        var longitud = 0;

        if(posValida.length == 3){
            tipoValidacion = posValida[0];
            campo = posValida[1];
            mensaje = posValida[2];
        }else if(posValida.length == 4){
            tipoValidacion = posValida[0];
            campo = posValida[1];
            campo2 = posValida[2]; // puede contener un valor n�merico de longitud o un valor de otro objeto para ser
            //  comparado con el campo 1 de acuerdo al par�metro del tipo de validaci�n
            mensaje = posValida[3];
        }
			
        switch(tipoValidacion){
            case "Requerido" :{  // SE MODIFICO Requerido PARA QUE SOPORTE ARREGLOS DE COMPONENTES 20-11-2009 rogelio martin

            
                try{
                
                    if(form[campo][0].type=="select-one"||form[campo][0].type=="text"){
                    
                        var tamano=new Array();
                        tamano=form[campo].length;
                        for(var x=0;x<tamano;x++){
                            if(!form[campo][x].value){
                                Sexy.alert(mensaje);
                             
                                form[campo][x].style.backgroundColor="#FFFF99";
                                return false;
                            }
                        }
                    }else{
                        if(!form[campo].value){
                            Sexy.alert(mensaje);
                           
                            form[campo].style.backgroundColor="#FFFF99";
                            return false;
                        }
                    }
                       
                }catch(e){
                    if(!form[campo].value){
                        Sexy.alert(mensaje);
                        form[campo].style.backgroundColor="#FFFF99";
                        return false;
                    }

                      
                }
                

                

                /*  if(form[campo].length>1){

                    for(var y=0;y<form[campo].length;y++){
                        if(!form[campo][y].value){
                            Sexy.alert(mensaje);
                            form[campo][y].style.backgroundColor="#FFFF99";
                            return false;
                        }
                    }

                }else{
                    if(!form[campo].value){
                        Sexy.alert(mensaje);
                        form[campo].style.backgroundColor="#FFFF99";
                        return false;
                    }
                }*/

                break;

            }


            case "NumeroRequerido":{
                        
                if (!/^([0-9])*$/.test(form[campo].value)){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }
                        
                        
                break;
            }

            case "NumeroDecimal":{

                if (isNaN(form[campo].value)){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }


                break;
            }

            case "HoraRequerida":{
                var hora=form[campo].value;
                var hora2=hora.substr(0,2);
                var hora3=hora.substr(3,2);
                var puntos=hora.substr(2,1);
                if (!/^([0-9])*$/.test(hora2)|!/^([0-9])*$/.test(hora3)|puntos!=":"){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }
                        
                        
                break;
            }
                        
            case "CalificacionValida":{

                if (form[campo].value<6||form[campo].value>10){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }


                break;
            }
                        
                        
            case "HoraValidada":{
                var horaV=form[campo].value;
                var horaVV=form[campo2].value;
                var horaV2;
                var horaV3;
                var horaVV2;
                var horaVV3;
                        
                if(horaV.substr(0,1)==0){
                    horaV2=horaV.substr(1,1);
                }else{
                    horaV2=horaV.substr(0,2);
                }
                                
                if(horaV.substr(3,2)==0){
                    horaV3=horaV.substr(4,1);
                }else{
                    horaV3=horaV.substr(3,2);
                }
                                
                                
                                
                                
                if(horaVV.substr(0,1)==0){
                    horaVV2=horaVV.substr(1,1);
                                    
                }else{
                    horaVV2=horaVV.substr(0,2);
                }
                                
                if(horaVV.substr(3,2)==0){
                    horaVV3=horaVV.substr(4,1);
                                    
                }else{
                    horaVV3=horaVV.substr(3,2);
                }
                //var puntos=hora.substr(2,1);
                       
                       
                        
                if (horaV2>horaVV2){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }else{
                    if(horaV2==horaVV2){
                        if(horaV3>horaVV3){
                            Sexy.alert(mensaje);
                            form[campo].focus();
                                   
                            return false;
                        }
                    }
                }
                            
                       
                        
                        
                break;
            }
                        
                        
                        
				
            case "email" :{
                if(form[campo].value != ''){
                    if(! validEmail(form[campo].value)){
                        Sexy.alert(mensaje);
                        form[campo].focus();
                        form[campo].style.backgroundColor="#FFFF99";
                        return false;
                    }
                }
                break;
            }
            case "Curp" :{
                if(form[campo].value != ''){
                    var exp = /^[A-Z]{4}\d{2}(1|0)\d(0|1|2|3)\d(H|M)[A-Z]{5}\d{2}$/;
                    if(!exp.test(form[campo].value)){
                        Sexy.alert(mensaje);
                        form[campo].focus();
                        form[campo].style.backgroundColor="#FFFF99";
                        return false;
                    }
                }
                break;
            }
				
            case "Checked" :{
                var bandera = false;
                if(form[campo].length != null){
                    for(j = 0; j < form[campo].length; j++){
                        if(form[campo][j].checked){
                       
                            bandera = true;
                            break;
                        }
                    }
                }else{
                    if(form[campo].checked){
                        bandera = true;
                    }
                }
				
                if(!bandera){
                    Sexy.alert(mensaje);
                    return false;
                }
				
                break;
            }

				
            case "Longitud":{
                if(!form[campo].value || form[campo].value.length < campo2){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }
                break;
            }

            case "NumeroMinimo":{
                if(parseInt(form[campo].value) <parseInt(campo2)){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }
                break;
            }


            case "NumeroMaximo":{
                if(parseInt(form[campo].value) >parseInt(campo2)){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }
                break;
            }

				
            case "Password":{
                if(form[campo].value != form[campo2].value){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    return false;
                }
                break;
            }

            case "LimitedeGrupos":{

                if (form[campo].value<1||form[campo].value>14){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }


                break;
            }
            case "LimitedeCap":{

                if (form[campo].value<21||form[campo].value>35){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }


                break;
            }
            case "CalificacionModificado":{

                if (form[campo].value<-1||form[campo].value>10){
                    Sexy.alert(mensaje);
                    form[campo].focus();
                    form[campo].style.backgroundColor="#FFFF99";
                    return false;
                }

                break;
            }

                                
            case "ValidacionFecha":{
                var anoI,mesI,diaI,mesAI;
                var anoF,mesF,diaF,mesAF;
                var fechaI,fechaF;
                                        
                fechaI=form[campo].value; //fecha Inicial
                fechaF=form[campo2].value; //fecha Final
                                            
                //par�metros a validar para laas fechas
                anoI=fechaI.substr(0,2); //valor del a�o de la fecha inicial
                mesI=fechaI.substr(3,2); //valor del mes de la fecha inicial
                diaI=fechaI.substr(6,2); //valor del dia de la fecha inicial
			
                anoF=fechaF.substr(0,2); //valor del a�o de la fecha final
                mesF=fechaF.substr(3,2); //valor del mes de la fecha final
                diaF=fechaF.substr(6,2); //valor del dia de la fecha final
                                        
                                                            
                if(anoI.substr(0,1)==0){
                    anoII="20"+anoI;
                }else{
                    anoII="19"+anoI;
                }
                                        
                if(anoF.substr(0,1)==0){
                    anoFF="20"+anoI;
                }else{
                    anoFF="19"+anoI;
                }
				
                if(anoFF < anoII){
                    Sexy.alert(mensaje);
                    return false;
                }else {
                                            
                    if( mesI > mesF){
                        Sexy.alert(mensaje);
                        return false;
                    }else{
                        if(mesI==mesF){
                            if(diaI > diaF){
                                Sexy.alert(mensaje);
                                return false;
                            }
                        }
                    }
                }
                break;
            }
				
				
				
        } // fin de Switch
    } // fin del For

    return true;
}
	
function validEmail(str){
    // trim starting / ending whitespace
    str = str.replace(/^\s*/, "");
    str = str.replace(/\s*$/, "");
	
    var at="@"
    var dot="."
    var lat=str.indexOf(at)
    var lstr=str.length
    var ldot=str.indexOf(dot)

    if (str.indexOf(at)==-1)
        return false

    if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
        return false

    if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
        return false

    if (str.indexOf(at,(lat+1))!=-1)
        return false
	
    if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
        return false

    if (str.indexOf(dot,(lat+2))==-1)
        return false

    if (str.indexOf(" ")!=-1)
        return false

    return true;
}

function mayuscula(){
    var key=window.event.keyCode;//codigo de tecla.

    if (key >= 123 && key <= 255) {// se anexo para que no acepte acentos ni simbolos
        window.event.keyCode=127;
    }
    if (key < 123 && key > 96 ){
        window.event.keyCode=window.event.keyCode-32;
    }
    else{            
        if(key == 241){    //C?digo de ? 241
            window.event.keyCode=209;//C?digo de ? 209
        }
    }
}

function minuscula(){
    var key=window.event.keyCode;//codigo de tecla.
    if (key < 91 && key > 64 ){
        window.event.keyCode=window.event.keyCode+32;
    }
    else{
            
        if(key == 241){    //C?digo de ? 241
            window.event.keyCode=110;//C?digo de ? 209
        }
    }
}

function campoNumerico(){ 
    var key=window.event.keyCode;//codigo de tecla.
    if (key<48||key>57){//si no es numero
        window.event.keyCode=0;//anula la entrada de texto.
    }
}

function campoMoneda(){ 
    var key=window.event.keyCode;//codigo de tecla.
    if ((key<46||key>57||key==47)){//si no es numero
        window.event.keyCode=0;//anula la entrada de texto.
    }
}  


function checkchars(campos) {
    var max=150;
    if (campos.length > max) {
        window.event.keyCode=0;
        //Sexy.alert("No puede capturar m�s de 150 caracteres. Por favor, escriba \n de nuevo el texto o borre un poco de informacion.");
        return false;
    }
    else return true;
}

//Esta funci�n anula la entrada de @ para la cuenta de correo
function at(){
    if (window.event.keyCode == 64){
        Sexy.alert("El formato de la cuenta de correo no acepta la escritura del dominio.\n " +
            "Ejemplo: \n  - Correcto: juan.perez - o - Juan Perez."+
            "\n  - Incorrecto: juan.perez@cfe.gob.mx");
        window.event.keyCode = 0;
    }
}




function changeCase(frmObj) {
 
    var index;
    var tmpStr;
    var tmpChar;
    var preString;
    var postString;
    var strlen;
    tmpStr = frmObj.value.toLowerCase();
    strLen = tmpStr.length;




    if (strLen > 0)  {
        for (index = 0; index < strLen; index++)  {
            if (index == 0)  {
                tmpChar = tmpStr.substring(0,1).toUpperCase();
                postString = tmpStr.substring(1,strLen);
                tmpStr = tmpChar + postString;
            }
            else {
                tmpChar = tmpStr.substring(index, index+1);
                if (tmpChar == " " && index < (strLen-1))  {
                    tmpChar = tmpStr.substring(index+1, index+2).toUpperCase();
                    preString = tmpStr.substring(0, index+1);
                    postString = tmpStr.substring(index+2,strLen);
                    tmpStr = preString + tmpChar + postString;
                }
            }
        }
    }
    frmObj.value = tmpStr;
}

//calcular la edad de una persona
//recibe la fecha como un string en formato español
//devuelve un entero con la edad. Devuelve false en caso de que la fecha sea incorrecta o mayor que el dia actual
function calcular_edad(fecha){

    //calculo la fecha de hoy
    hoy=new Date()
    //alert(hoy)

    //calculo la fecha que recibo
    //La descompongo en un array
    var array_fecha = fecha.split("-")
    //si el array no tiene tres partes, la fecha es incorrecta
    if (array_fecha.length!=3)
        return false

    //compruebo que los ano, mes, dia son correctos
    var ano
    ano = parseInt(array_fecha[0]);
    if (isNaN(ano))
        return false

    var mes
    mes = parseInt(array_fecha[1]); 
    if (isNaN(mes))
        return false

    var dia
    dia = parseInt(array_fecha[2]);
    if (isNaN(dia))
        return false


    //si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4
    if (ano<=99)
        ano +=1900

    //resto los años de las dos fechas
    edad=hoy.getYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año

    if(edad<0){
        edad=''
        Sexy.alert("Edad incorrecta verificar fecha de nacimiento");
        return edad;
    }

    //si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido
    if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0
        return edad
    if (hoy.getMonth() + 1 - mes > 0)
        return edad+1

    //entonces es que eran iguales. miro los dias
    //si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido
    if (hoy.getUTCDate() - dia >= 0)
        return edad + 1
 
    return edad
}

function cambiarEstilo(id){

    document.getElementById(id).style.backgroundColor="#ffffff"

}

function Acentos(){
    var key=window.event.keyCode;//codigo de tecla.

    if(key>=32 && key<=47){
        window.event.keyCode=127;
    }
    if(key>=58 && key<=64){
        window.event.keyCode=127;
    }
    if(key>=91 && key<=96){
        window.event.keyCode=127;
    }
    if(key>=123 && key<=126){
        window.event.keyCode=127;
    }
    if(key>=0 && key<=47){
        window.event.keyCode=127;
    }
    if(key>=58 && key<=64){
        window.event.keyCode=127;
    }
    if(key>=91 && key<=96){
        window.event.keyCode=127;
    }
    if ((key == 224)) {// se anexo para que no acepte acentos ni simbolos
        window.event.keyCode=225;
    }
    if ((key == 232)) {// se anexo para que no acepte acentos ni simbolos
        window.event.keyCode=233;
    }
    if ((key == 236)) {// se anexo para que no acepte acentos ni simbolos
        window.event.keyCode=237;
    }
    if ((key == 242)) {// se anexo para que no acepte acentos ni simbolos
        window.event.keyCode=243;
    }
    if ((key == 249)) {// se anexo para que no acepte acentos ni simbolos
        window.event.keyCode=250;
    }
    
    if ((key >= 123 && key <= 255)) {// se anexo para que no acepte acentos ni simbolos
        window.event.keyCode=127;
    }
 

    
}
function validarNumero(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8 || tecla==45) return true;
    te = String.fromCharCode(tecla);
    patron=/\d/;
    return patron.test(te);
}

function validarNro(e) {
    var key;
    if(window.event) // IE
    {
        key = e.keyCode;
    }
    else if(e.which) // Netscape/Firefox/Opera
    {
        key = e.which;
    }

    if (key < 48 || key > 57)
    {
        return false;
    }
    return true;
}

