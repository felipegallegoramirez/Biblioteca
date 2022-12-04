export default interface plant{

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
      metodo_cultivo?:string;
      floracion?:string;
      problemas?:string;
      mes?: Array<string>
      dato_curioso?:string;
      url?:string;
      imagenid?:string;

  }