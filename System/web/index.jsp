<%-- 
    Document   : index
    Created on : 28-nov-2013, 10:54:48
    Author     : Alumno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


    <head>
        <title>Login|Ingreso</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <link rel="stylesheet"  type="text/css" href="recursos/css/stylelp1.css" ></link> 
            <link href=# rel='stylesheet' type='text/css'>
                <link rel="stylesheet" href="style.css" type="text/css" media="screen" />
                <link rel="stylesheet" href="fx.slide.css" type="text/css" media="screen" />
                <script type="text/javascript" src="js/mootools-1.2-core-yc.js"></script>
                <script type="text/javascript" src="js/mootools-1.2-more.js"></script>
                <script type="text/javascript" src="js/fx.slide.js"></script>
                <link rel="stylesheet"  type="text/css" href="recursos/css/stylelp1.css" ></link> 
                <link href=# rel='stylesheet' type='text/css'>
                    <!--
                    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>-->


                    <title>System</title>


                    <%
                        String usuario = request.getParameter("log") == null ? "" : request.getParameter("log");
                        String password = request.getParameter("pwd") == null ? "" : request.getParameter("pwd");

                        if (usuario.equals("admin") && password.equals("123456")) {
                            response.sendRedirect("Menu/Logueo/indexFrameAdministrador.jsp");
                        }else{if(usuario.equals("segul")&& password.equals("123456")){
                        response.sendRedirect("Menu/LogueoCandidato/indexFrameAdministrador.jsp");
                        }
                        
                        }
                    %>
                  </head>
                    <body>
                        <!-- Login -->
                        <!--           <div id="container">-->
                        <div id="login">


                            <!--   <div class="divlogin">-->
                            <div class="loginContent">
                                <form name="frame"  action="index.jsp" >
                                    <label for="log"><b>Usuario: </b></label>
                                    <input class="field" type="text" name="log" id="log" value="" size="23" />
                                    <label for="pwd"><b>Password:</b></label>
                                    <input class="field" type="password" name="pwd" id="pwd" size="23" />
                                    <input type="submit" name="submit" value="" class="button_login" />
                                    <input type="hidden" name="redirect_to" value=""/>
                                </form>
                            </div>
                        </div>
                        <div class="right"> <a href=""></a>  <a href=""></a></div>
                        </div>
                        <div class="loginClose"><a href="#" id="closeLogin">Cerrar Panel</a></div>

                        </div> 

                        <div id="container">
                            <div id="top">
                                <!-- login -->
                                <ul class="login">
                                    <li class="left">&nbsp;</li>
                                    <li>Sistema De Administracion</li>
                                    <!--&nbsp				<li>|</li>-->
                                    <li><a id="toggleLogin" href="">Login</a></li>
                                </ul> <!-- / login -->
                            </div> <!-- / top -->
                          <div class="clearfix"></div>
                        </div><!-- / container -->
                        <center>
                            <br><br><br><br><br><br><br><br><br>
                                <br><br><br><br>
                        <h1>SISTEMA VIRTUAL DE ADMINISTRACION</h1>
                        </center>
                    </body>

                    </html>
