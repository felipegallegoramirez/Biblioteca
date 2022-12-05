import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { stat } from 'fs';
import about from '../Interfaces/about';

import { CentralService } from '../Services/central.service';
import { NotificacionesService } from '../Services/notificaciones.service';

@Component({
  selector: 'app-inputabout',
  templateUrl: './inputabout.component.html',
  styleUrls: ['./inputabout.component.css']
})
export class InputaboutComponent implements OnInit {
  url:string="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/Consejos-para-hacer-ima%CC%81genes-increi%CC%81bles-1024x538.png.webp"
  id: string = '';
  photoSelected: Array<string> | ArrayBuffer | any =[this.url,this.url,this.url,this.url,this.url,this.url] ;
  file: Array<File> | any= [] ;
  about:about | any


  constructor(
    public CentralService: CentralService,
    public activatedRoute: ActivatedRoute,
    private NotificacionesService:NotificacionesService,
    private Router:Router
  ) {}

  ngOnInit(): void {
    this.rellenar()

  }




  onPhotoSelected(event: any,id:number): void {
    if (event.target.files && event.target.files[0]) {
      this.file[id] = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected[id] = reader.result;
      reader.readAsDataURL(this.file[id]);
    }
  }



  comprobar(data:about): Boolean{
    /*
    all: 510
    */

    var status=true;
    var mensaje="<h1>Error</h1>"

    if(data.texto1!=undefined && (data.texto1?.length>510 || data.texto1?.length<10)){
      
      status=false
      mensaje=mensaje+"<p>El Campo Resumen debe estar entre 510 y 10 caracteres</p>"
    }
    if(data.texto2!=undefined && (data.texto2?.length>510 || data.texto2?.length<10)){
      
      status=false
      mensaje=mensaje+"<p>El Campo Mision debe estar entre 510 y 10 caracteres</p>"
    }
    if(data.texto3!=undefined && (data.texto3?.length>510 || data.texto3?.length<10)){
      
      status=false
      mensaje=mensaje+"<p>El Campo Vision debe estar entre 510 y 10 caracteres</p>"
    }

   
    if(data.url1==undefined || data.url1==""){
      mensaje=mensaje+"<p>Debes agregar un archivo en la foto 1</p>"
      status=false
    }
    if(data.url2==undefined || data.url1==""){
      mensaje=mensaje+"<p>Debes agregar un archivo en la foto 2</p>"
      status=false
    }
    if(data.url3==undefined || data.url1==""){
      mensaje=mensaje+"<p>Debes agregar un archivo en la foto 3</p>"
      status=false
    }
    if(data.url4==undefined || data.url1==""){
      mensaje=mensaje+"<p>Debes agregar un archivo en la foto 4</p>"
      status=false
    }
    if(data.url5==undefined || data.url5==""){
      mensaje=mensaje+"<p>Debes agregar un archivo en la foto 5</p>"
      status=false
    }
    if(data.url6==undefined || data.url6==""){
      mensaje=mensaje+"<p>Debes agregar un archivo en la foto 6</p>"
      status=false
    }

    console.log(data)
    if (!status){
      this.NotificacionesService.noti.emit(mensaje)
    }
    return status
  }




  async rellenar(){
    const t1 = <HTMLInputElement>document.querySelector('#texto1');
    const t2 = <HTMLInputElement>document.querySelector('#texto2');
    const t3 = <HTMLInputElement>document.querySelector('#texto3');
    var a = await this.CentralService.getabout()
    var info = a.data() as about
    this.about =info

    t1.value=info.texto1 || ""
    t2.value=info.texto2 || ""
    t3.value=info.texto3 || ""
    this.photoSelected[0]=info.url1
    this.photoSelected[1]=info.url2
    this.photoSelected[2]=info.url3
    this.photoSelected[3]=info.url4
    this.photoSelected[4]=info.url5
    this.photoSelected[5]=info.url6
  }


  async enviar(){
    const foto1 = <HTMLInputElement>document.querySelector('#foto1');
    const foto2 = <HTMLInputElement>document.querySelector('#foto2');
    const foto3 = <HTMLInputElement>document.querySelector('#foto3');
    const foto4 = <HTMLInputElement>document.querySelector('#foto4');
    const foto5 = <HTMLInputElement>document.querySelector('#foto5');
    const foto6 = <HTMLInputElement>document.querySelector('#foto6');


    var url1=this.about.url1
    var url2=this.about.url2
    var url3=this.about.url3
    var url4=this.about.url4
    var url5=this.about.url4
    var url6=this.about.url4

    var di1=this.about.imagen1id
    var di2=this.about.imagen1id
    var di3=this.about.imagen1id
    var di4=this.about.imagen1id
    var di5=this.about.imagen1id
    var di6=this.about.imagen1id

    if (foto1.files != null) {
      var file = foto1.files[0];
      if(file!=undefined){
        var x = await this.CentralService.uploadimagen(file);
        url1=x[0]
        di1=x[1]
      }
    }

    if (foto2.files != null) {
      var file = foto2.files[0];
      if(file!=undefined){
        var x = await this.CentralService.uploadimagen(file);
        url2=x[0]
        di2=x[1]
      }
    }

    if (foto3.files != null) {
      var file = foto3.files[0];
      if(file!=undefined){
        var x = await this.CentralService.uploadimagen(file);
        url3=x[0]
        di3=x[1]
      }
    }

    if (foto4.files != null) {
      var file = foto4.files[0];
      if(file!=undefined){
        var x = await this.CentralService.uploadimagen(file);
        url4=x[0]
        di4=x[1]
      }
    }
    if (foto5.files != null) {
      var file = foto5.files[0];
      if(file!=undefined){
        var x = await this.CentralService.uploadimagen(file);
        url5=x[0]
        di5=x[1]
      }
    }
    if (foto6.files != null) {
      var file = foto6.files[0];
      if(file!=undefined){
        var x = await this.CentralService.uploadimagen(file);
        url6=x[0]
        di6=x[1]
      }
    }

    const t1 = <HTMLInputElement>document.querySelector('#texto1');
    const t2 = <HTMLInputElement>document.querySelector('#texto2');
    const t3 = <HTMLInputElement>document.querySelector('#texto3');
    var data = {
      id:"1",
      texto1:t1.value,
      texto2:t2.value,
      texto3:t3.value,
      url1:url1,
      url2:url2,
      url3:url3,
      url4:url4,
      imagen1id:di1,
      imagen2id:di2,
      imagen3id:di3,
      imagen4id:di4,

      url5:url5,
      url6:url6,
      imagen5id:di5,
      imagen6id:di6,
    }

    if(this.comprobar(data)){
      var response = await this.CentralService.putabout(data);
      console.log(response)
      if(this.about.url1!=data.url1 && this.about.imagen1id!=data.imagen1id){
        await this.CentralService.deleteimagen(this.about.imagen1id)
      }
      if(this.about.url2!=data.url2 && this.about.imagen2id!=data.imagen2id){
        await this.CentralService.deleteimagen(this.about.imagen2id)
      }
      if(this.about.url3!=data.url3 && this.about.imagen3id!=data.imagen3id){
        await this.CentralService.deleteimagen(this.about.imagen3id)
      }
      if(this.about.url4!=data.url4 && this.about.imagen4id!=data.imagen4id){
        await this.CentralService.deleteimagen(this.about.imagen4id)
      }
      if(this.about.url5!=data.url5 && this.about.imagen5id!=data.imagen5id){
        await this.CentralService.deleteimagen(this.about.imagen5id)
      }
      if(this.about.url6!=data.url6 && this.about.imagen6id!=data.imagen6id){
        await this.CentralService.deleteimagen(this.about.imagen6id)
      }
      this.Router.navigate(['/About-us'])

    }else{
      if(this.about.url1!=data.url1 && this.about.imagen1id!=data.imagen1id){
        await this.CentralService.deleteimagen(data.imagen1id)
      }
      if(this.about.url2!=data.url2 && this.about.imagen2id!=data.imagen2id){
        await this.CentralService.deleteimagen(data.imagen2id)
      }
      if(this.about.url3!=data.url3 && this.about.imagen3id!=data.imagen3id){
        await this.CentralService.deleteimagen(data.imagen3id)
      }
      if(this.about.url4!=data.url4 && this.about.imagen4id!=data.imagen4id){
        await this.CentralService.deleteimagen(data.imagen4id)
      }
      if(this.about.url5!=data.url5 && this.about.imagen5id!=data.imagen5id){
        await this.CentralService.deleteimagen(data.imagen5id)
      }
      if(this.about.url6!=data.url6 && this.about.imagen6id!=data.imagen6id){
        await this.CentralService.deleteimagen(data.imagen6id)
      }
    }
    





    
  }

}
