package org.apache.jsp.Menu.Logueo;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class menu_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n");
      out.write("<html dir=\"ltr\">\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n");
      out.write("\n");
      out.write("        <!-- Start css3menu.com HEAD section -->\n");
      out.write("<!--        <link rel=\"stylesheet\" href=\"../../css/stilos.css\" type=\"text/css\" /><style>._css3m{display:none}</style>-->\n");
      out.write("        <link rel=\"stylesheet\" href=\"../../Resources/css/menu_administrador_files/css3menu1/style.css\" type=\"text/css\" /><style>._css3m{display:none}</style><!--\n");
      out.write("         End css3menu.com HEAD section -->\n");
      out.write("\n");
      out.write("        <!-- End css3menu.com HEAD section -->\n");
      out.write("\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("\n");
      out.write("        <!-- Start css3menu.com BODY section -->\n");
      out.write("        <ul id=\"css3menu1\" class=\"topmenu\">\n");
      out.write("            \n");
      out.write("           \n");
      out.write("           \n");
      out.write("            <li class=\"topfirst\"><a href=\"../../ControlMatriculas?opc=V\" target=\"body\"   style=\"width:150px;height:0px;line-height:10px;\" ><span>Gastos</span></a><br>\n");
      out.write("           \n");
      out.write("            </li>\n");
      out.write("            <li class=\"topfirst\"><a href=\"../../ControlMatriculas?opc=V\" target=\"body\"   style=\"width:150px;height:0px;line-height:10px;\" ><span>Cedula Central</span></a><br>\n");
      out.write("           \n");
      out.write("            </li>\n");
      out.write("            \n");
      out.write("   \n");
      out.write("        </ul><p class=\"_css3m\"><a href=\"http://css3menu.com/\">Creating CSS Buttons Css3Menu.com</a></p>\n");
      out.write("        <!-- End css3menu.com BODY section -->\n");
      out.write("\n");
      out.write("    </body>\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
