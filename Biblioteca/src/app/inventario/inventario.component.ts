import { Component, OnInit } from '@angular/core';
import inventario from '../Interfaces/inventario';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private CentralService:CentralService) { }
  items:inventario[]=[]
  ngOnInit(): void {
    this.CentralService.getinventarios().subscribe(inventario =>{
      this.items=inventario
    })

    
  }

  async subir(inventario:inventario,id:any){
    if(inventario.cantidad!=undefined){
      inventario.cantidad=inventario.cantidad + 1
    }
    await this.CentralService.putinventario(id,inventario)

  }
  async bajar(inventario:inventario,id:any){
    console.log(inventario.cantidad)
    if(inventario.cantidad!=undefined){
      inventario.cantidad=inventario.cantidad - 1

      if(inventario.cantidad> -1){
        await this.CentralService.putinventario(id,inventario)

      }else{
        
        await this.CentralService.deleteinventario(id)
      }
    }


  }

}
