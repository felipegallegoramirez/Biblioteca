import { Component, OnInit } from '@angular/core';
import ave from '../Interfaces/ave';
import { CentralService } from '../Services/central.service';


@Component({
  selector: 'app-galeria-aves',
  templateUrl: './galeria-aves.component.html',
  styleUrls: ['./galeria-aves.component.css']
})
export class GaleriaAvesComponent implements OnInit {

  constructor(private CentralService:CentralService ) { }
  items:ave[]=[]
  itemsg:ave[]=[]
  ngOnInit(): void {
    this.CentralService.getaves().subscribe(aves =>{
      this.items=aves
      this.itemsg=aves
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
