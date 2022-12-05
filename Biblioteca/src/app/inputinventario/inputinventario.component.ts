import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { stat } from 'fs';
import inventario from '../Interfaces/inventario';

import { CentralService } from '../Services/central.service';
import { NotificacionesService } from '../Services/notificaciones.service';

@Component({
  selector: 'app-inputinventario',
  templateUrl: './inputinventario.component.html',
  styleUrls: ['./inputinventario.component.css']
})
export class InputinventarioComponent implements OnInit {

  constructor(
    public CentralService: CentralService,
    public activatedRoute: ActivatedRoute,
    private NotificacionesService:NotificacionesService,
    private Router:Router
  ) {}
  ngOnInit(): void {
  }



  comprobar(data:inventario): Boolean{
    /*
    Nombre: 32
    Nombre Cientifico: 32
    Carateristicas: 720

    Condiciones: 720
    Metodo Cultivo: 720

    Floracion: 720
    Problemas: 720

    meses: 80
    Dato Curiso: 200
    */

    var status=true;
    var mensaje="<h1>Error</h1>"

    if(data.nombre!=undefined && (data.nombre?.length>32 || data.nombre?.length<10)){
      
      status=false
      mensaje=mensaje+"<p>El Campo Nombre debe estar entre 32 y 10 caracteres</p>"
    }
    if(data.tipo!=undefined && (data.tipo?.length>32 || data.tipo?.length<10)){
      
      status=false
      mensaje=mensaje+"<p>El Campo tipo debe estar entre 32 y 10 caracteres</p>"
    }
    if(data.cantidad!=undefined && (data.cantidad>-1)){
      
      status=false
      mensaje=mensaje+"<p>El Campo cantidad debe ser igual a 0 o mayor</p>"
    }
    if(data.random!=undefined && (data.random?.length>32 || data.random?.length<10)){
      
      status=false
      mensaje=mensaje+"<p>El Campo Otro Dato debe estar entre 32 y 10 caracteres</p>"
    }
    

    console.log(data)
    if (!status){
      this.NotificacionesService.noti.emit(mensaje)
    }
    return status
  }

  async enviar():Promise<void>{

    


    const nombre=<HTMLInputElement>  document.querySelector("#nombre")
    const tipo=<HTMLInputElement>  document.querySelector("#tipo")
    const cantidad=<HTMLInputElement>  document.querySelector("#cantidad")
    const random=<HTMLInputElement>  document.querySelector("#random")

    var envio={
      nombre:nombre?.value,
      tipo:tipo?.value,
   cantidad:parseInt(cantidad?.value),
   random:random?.value,
    }
    console.log(envio)
    if(this.comprobar(envio)){
      const response = await this.CentralService.addinventario(envio);
      console.log(response);
    }

    

  }
}
