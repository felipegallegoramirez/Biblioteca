import { Component, OnInit } from '@angular/core';
import {NotificacionesService} from '../Services/notificaciones.service'

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  constructor(private NotificacionesService:NotificacionesService) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.NotificacionesService.cerar.emit(false)
    document.getElementById("info")?.remove()
  }
}
