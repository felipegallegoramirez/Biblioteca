import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { info } from 'console';
import ave from '../Interfaces/ave';
import { CentralService } from '../Services/central.service';

@Component({
  selector: 'app-vista-aves',
  templateUrl: './vista-aves.component.html',
  styleUrls: ['./vista-aves.component.css']
})
export class VistaAvesComponent implements OnInit {

  constructor(private CentralService:CentralService, public activatedRoute:ActivatedRoute) { }
  items:ave | any=[]
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
    var a = await this.CentralService.getave(this.id)
    var info = a.data() as ave
    this.real=info
  }

}
