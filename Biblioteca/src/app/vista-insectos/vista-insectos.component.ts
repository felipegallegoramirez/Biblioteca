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
  id:string=""

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
     this.id = params['id'];
     if (this.id) {
       this.info()
     }
     


 })
 }

 async info(){
   var a = await this.CentralService.getinsecto(this.id)
   var info = a.data() as insecto
   this.real=info
 }
}
