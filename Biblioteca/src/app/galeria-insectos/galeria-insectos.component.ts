import { Component, OnInit } from '@angular/core';
import insecto from '../Interfaces/insecto';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-galeria-insectos',
  templateUrl: './galeria-insectos.component.html',
  styleUrls: ['./galeria-insectos.component.css']
})
export class GaleriaInsectosComponent implements OnInit {

  constructor(private CentralService:CentralService) { }
  items:insecto[]=[]
  ngOnInit(): void {
    this.CentralService.getinsectos().subscribe(insecto =>{
      this.items=insecto
    })

    
  }

}
