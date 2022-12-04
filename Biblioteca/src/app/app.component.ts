import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from './Services/notificaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private NotificacionesService:NotificacionesService){}
  title = 'Biblioteca';
  noticia:boolean=false

  ngOnInit(){
    this.NotificacionesService.noti.subscribe(data=>{
        document.getElementById("notifi")?.classList.remove("oculto")
      
      console.log(this.noticia)
      
      const div = document.createElement("div");
      div.id="info"
      let x = document.getElementById("notificacion")
      x?.appendChild(div)
      div.innerHTML=data
      
    })
    this.NotificacionesService.cerar.subscribe(data=>{
      document.getElementById("notifi")?.classList.add("oculto")
    })


  }
  barra() {
    
    let div = <HTMLFormElement> document.getElementById("menu");
    console.log(div.className)
    if(div.className == "links"){
      div.className = "bar_links"
    }else{
      div.className = "links"
    }
  }
}
