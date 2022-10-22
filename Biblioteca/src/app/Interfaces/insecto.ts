export default interface insecto{

    /*
    _id

    Nombre
    NombreCientifico
    Caracteristicas
    Condiciones
    Metodo Cultivo
    Floracion
    Problemas

    mes

    Enero
    Febrero
    Marzo
    Abril
    Mayo
    Junio
    Julio
    Agosto
    Septiembre
    Octubre
    Noviembre
    Diciembre

    DatoInteresante
    */





      
      id?:string;
      nombre?:string;
      nombre_cientifico?:string;
      caracteristicas?:string;
      condiciones?:string;
      comportamiento?:string;
      habitat?:string;
      conservacion?:string;
      mes?: Array<string>
      dato_curioso?:string;
      url?:string;

  }