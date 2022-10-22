import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centralinput',
  templateUrl: './centralinput.component.html',
  styleUrls: ['./centralinput.component.css']
})
export class CentralinputComponent implements OnInit {

  constructor() { }
  s1:boolean=true;
  s2:boolean=false;
  s3:boolean=false;
  s4:boolean=false;
  ngOnInit(): void {
  }
  cambiar(num:number){
    const b1= document.querySelector("#b1")
    const b2= document.querySelector("#b2")
    const b3= document.querySelector("#b3")
    const b4= document.querySelector("#b4")

    b1?.classList.remove("selected1");
    b2?.classList.remove("selected2");
    b3?.classList.remove("selected3");
    b4?.classList.remove("selected4");

    if(num==1)b1?.classList.add("selected1")
    if(num==2)b2?.classList.add("selected2")
    if(num==3)b3?.classList.add("selected3")
    if(num==4)b4?.classList.add("selected4")

    this.s1= num==1?true:false;
    this.s2= num==2?true:false;
    this.s3= num==3?true:false;
    this.s4= num==4?true:false;
  }

}
