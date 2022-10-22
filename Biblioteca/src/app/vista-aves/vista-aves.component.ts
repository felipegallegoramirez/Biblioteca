import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ave from '../Interfaces/ave';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-vista-aves',
  templateUrl: './vista-aves.component.html',
  styleUrls: ['./vista-aves.component.css']
})
export class VistaAvesComponent implements OnInit {

  constructor(private CentralService:CentralService, public activatedRoute:ActivatedRoute) { }
  items:ave[]=[]
  real:any 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var id= params['id'];
    this.CentralService.getaves().subscribe(ave =>{
      this.items=ave
      var a=this.items.find((x:ave) =>x.id==id)
      if(a!=undefined){this.real = a}
        
  
      
    })
  })
  }

}
