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
    this.CentralService.getinventario().subscribe(inventario =>{
      this.items=inventario
    })

    
  }

}
