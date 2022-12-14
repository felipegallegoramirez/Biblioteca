import { Component, OnInit } from '@angular/core';
import insecto from '../Interfaces/insecto';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-galeria-insectos',
  templateUrl: './galeria-insectos.component.html',
  styleUrls: ['./galeria-insectos.component.css']
})
export class GaleriaInsectosComponent implements OnInit {

  constructor(private CentralService:CentralService ) { }
  items:insecto[]=[]
  itemsg:insecto[]=[]
  ngOnInit(): void {
    this.CentralService.getinsectos().subscribe(insecto =>{
      this.items=insecto
      this.itemsg=insecto
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
