import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import insecto from '../Interfaces/insecto';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-vista-insectos',
  templateUrl: './vista-insectos.component.html',
  styleUrls: ['./vista-insectos.component.css']
})
export class VistaInsectosComponent implements OnInit {

  constructor(private CentralService:CentralService, public activatedRoute:ActivatedRoute) { }
  items:insecto[]=[]
  real:any 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var id= params['id'];
    this.CentralService.getinsectos().subscribe(insecto =>{
      this.items=insecto
      var a=this.items.find((x:insecto) =>x.id==id)
      if(a!=undefined){this.real = a}
        
  
      
    })
  })
  }
}
