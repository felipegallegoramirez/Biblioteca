import { Component, OnInit } from '@angular/core';
import plant from '../Interfaces/plant';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-galeria-planta',
  templateUrl: './galeria-planta.component.html',
  styleUrls: ['./galeria-planta.component.css']
})
export class GaleriaPlantaComponent implements OnInit {

  constructor(private CentralService:CentralService ) { }
  items:plant[]=[]
  itemsg:plant[]=[]
  ngOnInit(): void {
    this.CentralService.getplants().subscribe(plant =>{
      this.items=plant
      this.itemsg=plant
    })
  }

  busqueda(){
    var a = <HTMLInputElement>document.getElementById("buscar")
    if (a.value?.length>2){
    this.items=this.itemsg.filter(x=>x.nombre?.toLowerCase().includes(a.value.toLowerCase()))
    console.log(a)
    }else{
      this.items=this.itemsg
    }
  }

}
