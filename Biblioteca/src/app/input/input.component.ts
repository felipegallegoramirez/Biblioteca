import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { stat } from 'fs';
import plant from '../Interfaces/plant';

import { CentralService } from '../Services/central.service';
import { NotificacionesService } from '../Services/notificaciones.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  id: string = '';
  photoSelected: string | ArrayBuffer | any = 'https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/Consejos-para-hacer-ima%CC%81genes-increi%CC%81bles-1024x538.png.webp';
  file: File | any= [] ;
  plant:plant|any



  constructor(
    public CentralService: CentralService,
    public activatedRoute: ActivatedRoute,
    private NotificacionesService:NotificacionesService,
    private Router:Router
  ) {}

  



  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.rellenar()
        var a= document.getElementById("eliminar")
        a?.classList.remove("ocultar")
      }
      const b = localStorage.getItem('h');
      var hora=new Date().getTime()
      hora=hora+83600000
      if(b){
        if(parseInt(b)>hora || b=="0"){
          this.Router.navigate(['/Login/1'])
          localStorage.setItem('h', "0");
        }
      }else{
        localStorage.setItem('h', "0");
      }

    });





    
  }

  async eliminar(){
    await this.CentralService.deleteimagen(this.plant.imagenid)
    console.log(await this.CentralService.deleteplant(this.id))
    this.Router.navigate(['/Login/1'])
  }

  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  async rellenar() {

    const nombre = <HTMLInputElement>document.querySelector('#nombre');
    const nombre_cientifico = <HTMLInputElement>(document.querySelector('#nombre_cientifico'));
    const caracteristicas = <HTMLInputElement>(document.querySelector('#caracteristicas'));
    const condiciones = <HTMLInputElement>(document.querySelector('#condiciones'));
    const metodo_cultivo = <HTMLInputElement>(document.querySelector('#metodo_cultivo'));
    const floracion = <HTMLInputElement>document.querySelector('#floracion');
    const problemas = <HTMLInputElement>(document.querySelector('#problemas'));

    //mes a mes

    const enero = <HTMLInputElement>document.querySelector('#enero');
    const febrero = <HTMLInputElement>document.querySelector('#febrero');
    const marzo = <HTMLInputElement>document.querySelector('#marzo');
    const abril = <HTMLInputElement>document.querySelector('#abril');
    const mayo = <HTMLInputElement>document.querySelector('#mayo');
    const junio = <HTMLInputElement>document.querySelector('#junio');
    const julio = <HTMLInputElement>document.querySelector('#julio');
    const agosto = <HTMLInputElement>document.querySelector('#agosto');
    const septiembre = <HTMLInputElement>document.querySelector('#septiembre');
    const octubre = <HTMLInputElement>document.querySelector('#octubre');
    const noviembre = <HTMLInputElement>document.querySelector('#noviembre');
    const diciembre = <HTMLInputElement>document.querySelector('#diciembre');
    const dato_curioso = <HTMLInputElement>(document.querySelector('#dato_curioso'));



    var a = await this.CentralService.getplant(this.id)
    var info = a.data() as plant
    this.plant =info
    console.log(info)


    nombre.value=info.nombre || "";
    nombre_cientifico.value=info.nombre_cientifico || "";
    caracteristicas.value =info.caracteristicas || "";
    condiciones.value =info.condiciones || "";
    metodo_cultivo.value =info.metodo_cultivo || "";
    floracion.value =info.floracion || "";
    problemas.value =info.problemas || "";
    if(info.mes){
      enero.value =info.mes[0]  || "";
      febrero.value =info.mes[1] || "";
      marzo.value =info.mes[2]  || "";
      abril.value =info.mes[3]  || "";
      mayo.value =info.mes[4]  || "";
      junio.value =info.mes[5]  || "";
      julio.value =info.mes[6]  || "";
      agosto.value =info.mes[7]  || "";
      septiembre.value =info.mes[8]  || "";
      octubre.value =info.mes[9]  || "";
      noviembre.value =info.mes[10] || ""
      diciembre.value =info.mes[11] || ""
    }

    dato_curioso.value =info.dato_curioso || "";
    this.photoSelected=info.url || "";
  }


  comprobar(data:plant): Boolean{
    /*
    Nombre: 32
    Nombre Cientifico: 32
    Carateristicas: 720

    Condiciones: 720
    Metodo Cultivo: 720

    Floracion: 720
    Problemas: 720

    meses: 80
    Dato Curiso: 200
    */

    var status=true;
    var mensaje="<h1>Error</h1>"

    if(data.nombre!=undefined && (data.nombre?.length>32 || data.nombre?.length<10)){
      
      status=false
      mensaje=mensaje+"<p>El Campo Nombre debe estar entre 32 y 10 caracteres</p>"
    }
    if(data.nombre_cientifico!=undefined && (data.nombre_cientifico?.length>32 || data.nombre_cientifico?.length<10)){
      status=false
      mensaje=mensaje+"<p>El Campo nombre_cientifico debe estar entre 32 y 10 caracteres</p>"
    }
    if(data.caracteristicas!=undefined && (data.caracteristicas?.length>520 || data.caracteristicas?.length<10)){
      status=false
      mensaje=mensaje+"<p>El Campo caracteristicas debe estar entre 520 y 10 caracteres</p>"
    }
    if(data.condiciones!=undefined && (data.condiciones?.length>520 || data.condiciones?.length<10)){
      status=false
      mensaje=mensaje+"<p>El Campo condiciones debe estar entre 520 y 10 caracteres</p>"
    }
    if(data.metodo_cultivo!=undefined && (data.metodo_cultivo?.length>520 || data.metodo_cultivo?.length<10)){
      status=false
      mensaje=mensaje+"<p>El Campo metodo_cultivo debe estar entre 520 y 10 caracteres</p>"
    }
    if(data.floracion!=undefined && (data.floracion?.length>520 || data.floracion?.length<10)){
      status=false
      mensaje=mensaje+"<p>El Campo floracion debe estar entre 520 y 10 caracteres</p>"
    }
    if(data.problemas!=undefined && (data.problemas?.length>520 || data.problemas?.length<10)){
      status=false
      mensaje=mensaje+"<p>El Campo problemas debe estar entre 520 y 10 caracteres</p>"
    }

    if(data.mes!=undefined && data.mes?.length==12){
      var nombremes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
      for (var i=0;i<12;i++){
        if(data.mes[i]!=undefined && (data.mes[i]?.length>80 || data.mes[i]?.length<10)){
          status=false
          mensaje=mensaje+"<p>El Campo "+ nombremes[i] +"debe estar entre 80 y 10 caracteres</p>"
        }
      }

      



    }

    if(data.dato_curioso!=undefined && (data.dato_curioso?.length>200 || data.dato_curioso?.length<10)){
      status=false
      mensaje=mensaje+"<p>El Campo habitat debe estar entre 200 y 10 caracteres</p>"
    }
    if(data.url==undefined || data.url==""){
      mensaje=mensaje+"<p>Debes agregar un archivo</p>"
      status=false
    }

    console.log(data)
    if (!status){
      this.NotificacionesService.noti.emit(mensaje)
    }
    return status






  }

  async enviar(): Promise<void> {
    const foto = <HTMLInputElement>document.querySelector('#foto');

    var url=''
    var imagenid=''
    if (this.id != '' && this.id ) {
      if(this.plant.url){
        url=this.plant.url
      }
      if(this.plant.imagenid){
        imagenid=this.plant.imagenid
      }

    }


    if (foto.files != null) {
      var file = foto.files[0];
      console.log(file)
      var data
      if(file!=undefined){
        data = await this.CentralService.uploadimagen(file);
        url=data[0]
        imagenid= data[1]
      }

    }

    const nombre = <HTMLInputElement>document.querySelector('#nombre');
    const nombre_cientifico = <HTMLInputElement>(document.querySelector('#nombre_cientifico'));
    const caracteristicas = <HTMLInputElement>(document.querySelector('#caracteristicas'));
    const condiciones = <HTMLInputElement>(document.querySelector('#condiciones'));
    const metodo_cultivo = <HTMLInputElement>(document.querySelector('#metodo_cultivo'));
    const floracion = <HTMLInputElement>document.querySelector('#floracion');
    const problemas = <HTMLInputElement>(document.querySelector('#problemas'));

    //mes a mes

    const enero = <HTMLInputElement>document.querySelector('#enero');
    const febrero = <HTMLInputElement>document.querySelector('#febrero');
    const marzo = <HTMLInputElement>document.querySelector('#marzo');
    const abril = <HTMLInputElement>document.querySelector('#abril');
    const mayo = <HTMLInputElement>document.querySelector('#mayo');
    const junio = <HTMLInputElement>document.querySelector('#junio');
    const julio = <HTMLInputElement>document.querySelector('#julio');
    const agosto = <HTMLInputElement>document.querySelector('#agosto');
    const septiembre = <HTMLInputElement>document.querySelector('#septiembre');
    const octubre = <HTMLInputElement>document.querySelector('#octubre');
    const noviembre = <HTMLInputElement>document.querySelector('#noviembre');
    const diciembre = <HTMLInputElement>document.querySelector('#diciembre');
    const dato_curioso = <HTMLInputElement>(document.querySelector('#dato_curioso'));





    var response;
    if (this.id != '' && this.id) {
      var envio = {
        id: this.id,
        nombre: nombre?.value,
        nombre_cientifico: nombre_cientifico?.value,
        caracteristicas: caracteristicas?.value,
        condiciones: condiciones?.value,
        metodo_cultivo: metodo_cultivo?.value,
        floracion: floracion?.value,
        problemas: problemas?.value,
        mes: [
          enero?.value,
          febrero?.value,
          marzo?.value,
          abril?.value,
          mayo?.value,
          junio?.value,
          julio?.value,
          agosto?.value,
          septiembre?.value,
          octubre?.value,
          noviembre?.value,
          diciembre?.value,
        ],
        dato_curioso: dato_curioso?.value,
        url: url,
        imagenid:imagenid
      };
      if(this.comprobar(envio)){
        response = await this.CentralService.putplant(this.id,envio);
        if(this.plant.url!=envio.url && this.plant.imagenid!=envio.imagenid){
          await this.CentralService.deleteimagen(this.plant.imagenid)
        }
        this.Router.navigate(['/VerPlantas/'+response.id])

      }else{
        if(envio.url!=undefined || envio.url!=""){
          if(this.plant.url!=envio.url && this.plant.imagenid!=envio.imagenid){
          await this.CentralService.deleteimagen(envio.imagenid)
          }
        }
      }

    } else {
      var envio2 = {
        nombre: nombre?.value,
        nombre_cientifico: nombre_cientifico?.value,
        caracteristicas: caracteristicas?.value,
        condiciones: condiciones?.value,
        metodo_cultivo: metodo_cultivo?.value,
        floracion: floracion?.value,
        problemas: problemas?.value,
        mes: [
          enero?.value,
          febrero?.value,
          marzo?.value,
          abril?.value,
          mayo?.value,
          junio?.value,
          julio?.value,
          agosto?.value,
          septiembre?.value,
          octubre?.value,
          noviembre?.value,
          diciembre?.value,
        ],
        dato_curioso: dato_curioso?.value,
        url: url,
        imagenid:imagenid
      };
      if(this.comprobar(envio2)){
        response = await this.CentralService.addplant(envio2);
        //this.Router.navigate(['/VerPlantas/'+response.id])
        
      }else{
        if(envio2.url!=undefined || envio2.url!=""){
          await this.CentralService.deleteimagen(envio2.imagenid)
        }
      }

    }
  }
}
