/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.pe.Conexion;

/**
 *
 * @author Segul
 */
import java.sql.*;


/**
 *
 * @author Alumno
 */
public class Conexion {
   public Connection conexion=null;
   public String qry=null;
   public PreparedStatement stm=null;
   public ResultSet rs=null;
   
   public Conexion() {
    }
    
    public void conectaDBE(){
        try {
        if(conexion==null){    
        Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
        conexion=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe",
                "Systen", 
                "123");        
        }
        System.out.println("Bien Calichin");
        } catch (Exception e) {
            System.out.println("Error En conexion..."+e.getMessage());
        }                
    }
    
    public void cerrarDB(){
        try {
            if(rs!=null){rs.close();}
            if(stm!=null){stm.close();}
            if(conexion!=null){conexion.close();}
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
    public static  void main(String[] arg){
        Conexion a = new Conexion();
        a.conectaDBE();
    }
    
    
}

