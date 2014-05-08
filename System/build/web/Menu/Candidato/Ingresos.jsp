<%-- 
    Document   : Ingresos
    Created on : 02/05/2014, 08:22:15 PM
    Author     : Segul
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
    <center>
       <form action="AlumnoControlador"  >
<table>
<tr >
<td >Formato de Gastos Publicos</td>
</tr>

<tr>
<td> Fecha Recibido El Aporte</td>
<td> <input type="date" name="fechaaporterecibido" value=""  />  </td>
</tr>

<tr>
<td>Nombres o Razon Social </td>
<td> <input type="text"  name="nombrerazonsocial" value=""/>    
     <input type="text"  name="apellidopaterno"  value=""/>
     <input type="text"  name="apellidomaterno"  value=""/>
</td>
</tr>

<tr>
<td>Documento </td>
<td>     
    <select name="DocumentoCodigo">
    <option value="1" >Dni</option>
    <option value="2" >Carnet De Extranjeria</option>
    <option value="3" >Ruc</option>
    <option value="4" >Nit</option> 
</select> 
    
    <input type="text"  name="numero"  value="Numero" size="6"/>
</td>
</tr>





<tr>
<td>Efectivo</td>
<td> <input type="text"  name="efectivo"  value=""  size="6"/> </td>
</tr>




<tr>
    
<td>Descripcion De Especie: </td>
<td>
   <textarea name="descripcionespecie" rows="5" cols="20">Descripcion
</textarea>
</td>
</tr>

<tr>
<td>Valorizacion de Especies</td>
<td> <input type="text"  name="valorizacionespecies"  value="" size="6"/> </td>
</tr>


<tr>
<td colspan="3"> <center> 
    <input type="hidden" name="opc" value="5" />
    <input type="submit"  value="Guardar" />
    <input type="submit"  value="Cancelar" />    
    <input type="submit"  value="Imprimir" />   
    <input type="submit"  value="Siguiente" />
</center>  </td>
</tr>




</table>
</form>
        </center>
    </body>
</html>
