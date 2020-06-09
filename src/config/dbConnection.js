const  mysql  =  require ( 'mysql' ) ;

módulo . exportaciones  =  ( )  =>  {
  devuelve  mysql . createConnection ( {
    host : '0.0.0.0' ,
    usuario : 'root' ,
    contraseña : 'contraseña' ,
    base de datos : 'spotyfy'
  } ) ;
}
