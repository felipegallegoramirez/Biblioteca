import { Component, OnInit } from '@angular/core';
import plant from '../Interfaces/plant';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-galeria-planta',
  templateUrl: './galeria-planta.component.html',
  styleUrls: ['./galeria-planta.component.css']
})
export class GaleriaPlantaComponent implements OnInit {

  constructor(private CentralService:CentralService) { }
  items:plant[]=[]
  ngOnInit(): void {
    this.CentralService.getplants().subscribe(plants =>{
      this.items=plants
    })

    
  }

}
