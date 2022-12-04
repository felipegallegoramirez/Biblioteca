import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  @Output() noti: EventEmitter<string>  = new EventEmitter();
  @Output() cerar: EventEmitter<boolean>  = new EventEmitter();

  constructor() { }




}
