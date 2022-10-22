import { Component, OnInit } from '@angular/core';
import ave from '../Interfaces/ave';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-galeria-aves',
  templateUrl: './galeria-aves.component.html',
  styleUrls: ['./galeria-aves.component.css']
})
export class GaleriaAvesComponent implements OnInit {

  constructor(private CentralService:CentralService) { }
  items:ave[]=[]
  ngOnInit(): void {
    this.CentralService.getaves().subscribe(aves =>{
      this.items=aves
    })

    
  }

}
