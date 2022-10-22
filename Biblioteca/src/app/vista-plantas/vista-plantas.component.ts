import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, ActivatedRoute } from '@angular/router';
import plant from '../Interfaces/plant';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-vista-plantas',
  templateUrl: './vista-plantas.component.html',
  styleUrls: ['./vista-plantas.component.css']
})
export class VistaPlantasComponent implements OnInit {
  constructor(private CentralService:CentralService, public activatedRoute:ActivatedRoute) { }
  items:plant[]=[]
  real:any 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var id= params['id'];
    this.CentralService.getplants().subscribe(plants =>{
      this.items=plants
      var a=this.items.find((x:plant) =>x.id==id)
      if(a!=undefined){this.real = a}
        
  
      
    })
  })
  }

}
