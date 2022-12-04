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
  items:plant | any=[]
  real:any 
  id:string="";

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params => { 
      this.id = params['id'];
      if (this.id) {
        this.info()
      }
      


  })
  }

  async info(){
    var a = await this.CentralService.getplant(this.id)
    var info = a.data() as plant
    this.real=info
  }

}
