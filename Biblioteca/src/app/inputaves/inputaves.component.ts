import { Component, OnInit } from '@angular/core';



import { CentralService } from '../Services/central.service'
@Component({
  selector: 'app-inputaves',
  templateUrl: './inputaves.component.html',
  styleUrls: ['./inputaves.component.css']
})
export class InputavesComponent implements OnInit {

  constructor(public CentralService:CentralService) { }
  ngOnInit(): void {
  }

  async enviar():Promise<void>{
    const foto= <HTMLInputElement>document.querySelector('#foto')
    var url = ""
    if (foto.files!=null){
    var file= foto.files[0]
     url = await this.CentralService.uploadimagen(file)
    }
    


    const nombre=<HTMLInputElement>  document.querySelector("#nombre")
    const nombre_cientifico=<HTMLInputElement> document.querySelector("#nombre_cientifico")
    const caracteristicas=<HTMLInputElement> document.querySelector("#caracteristicas")
    const condiciones=<HTMLInputElement> document.querySelector("#condiciones")
    const comportamiento=<HTMLInputElement> document.querySelector("#comportamiento")
    const habitat=<HTMLInputElement> document.querySelector("#habitat")
    const conservacion=<HTMLInputElement> document.querySelector("#conservacion")

    //mes a mes

    const enero=<HTMLInputElement>  document.querySelector("#enero")
    const febrero=<HTMLInputElement> document.querySelector("#febrero")
    const marzo=<HTMLInputElement> document.querySelector("#marzo")
    const abril=<HTMLInputElement> document.querySelector("#abril")
    const mayo=<HTMLInputElement> document.querySelector("#mayo")
    const junio=<HTMLInputElement> document.querySelector("#junio")
    const julio=<HTMLInputElement> document.querySelector("#julio")
    const agosto=<HTMLInputElement> document.querySelector("#agosto")
    const septiembre=<HTMLInputElement> document.querySelector("#septiembre")
    const octubre=<HTMLInputElement> document.querySelector("#octubre")
    const noviembre=<HTMLInputElement> document.querySelector("#noviembre")
    const diciembre=<HTMLInputElement> document.querySelector("#diciembre")

    const dato_curioso=<HTMLInputElement> document.querySelector("#dato_curioso")

    var envio={
   nombre:nombre?.value,
   nombre_cientifico:nombre_cientifico?.value,
   caracteristicas:caracteristicas?.value,
   condiciones:condiciones?.value,
   comportamiento:comportamiento?.value,
   habitat:habitat?.value,
   conservacion:conservacion?.value,
   mes:[
    enero?.value,
    febrero?.value,
    marzo?.value,
    abril?.value,
    mayo?.value,
    junio?.value,
    julio?.value,
    agosto?.value,
    septiembre?.value,
    octubre?.value,
    noviembre?.value,
    diciembre?.value,
  ],
   dato_curioso:dato_curioso?.value,
   url:url,
    }
    console.log(envio)

    const response = await this.CentralService.addave(envio);
    console.log(response);
    

  }

}
