import { Component, OnInit } from '@angular/core';
import { CentralService } from '../Services/central.service'

@Component({
  selector: 'app-inputinventario',
  templateUrl: './inputinventario.component.html',
  styleUrls: ['./inputinventario.component.css']
})
export class InputinventarioComponent implements OnInit {

  constructor(public CentralService:CentralService) { }
  ngOnInit(): void {
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

    const response = await this.CentralService.addinventario(envio);
    console.log(response);
    

  }
}
