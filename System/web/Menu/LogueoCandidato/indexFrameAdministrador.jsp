<%-- 
    Document   : indexFrame
    Created on : 12-jun-2012, 11:00:09
    Author     : Alumno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <title>JSP Page</title>
        <link rel="stylesheet"type="text/css" href="../../Recursos/css/style.css"/>
       
       
        
    </head>
    <body>  
      
         
                    
                    <table style="width: 100%; height: 80%">
                <tr>
                    <td colspan="22" >
                        <%@include file="head.jsp"  %>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100px" >
                        <div id="xmenu" style="height: 500px; width: 200px; "  >
                            <iframe  name="menu" frameborder="0" height="200" width="100%" scrolling="si" src="menu.jsp"></iframe>
                            <iframe  name="menu" frameborder="0" height="200" width="100%" scrolling="si" src="menu_1.jsp"></iframe>
                      
                        </div>                           
                    </td>
                    
                    
                    
                    <td >
                        <div id="xbody" style=" width: 100%; height: 500px; border-radius: 30px; opacity: 100%; " >
                            <iframe  name="body" frameborder="0" height="100%" width="100%" src="body.jsp"></iframe>
                        </div>                        
                    </td>

                </tr>  
                <tr>
                    <td colspan="2" style="height: 20px; width: 0px;">
                        <%@include file="copy.jsp" %>
                    </td>
                </tr>
            </table> 
        </div>
    </body>
</html>

