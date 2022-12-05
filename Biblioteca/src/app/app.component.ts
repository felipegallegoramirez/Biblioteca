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
  
  mostrar(){
    const x = document.getElementById("responsive")
    const y = document.getElementById("back")
    x?.classList.remove("oculto")
    y?.classList.remove("oculto")
  }
  cerrar(){
    const x = document.getElementById("responsive")
    const y = document.getElementById("back")
    x?.classList.add("oculto")
    y?.classList.add("oculto")

  }

}
