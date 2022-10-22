import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() { 

  }

  ngOnInit(): void {


  }


  paso(i:number) {
      let grande = <HTMLFormElement> document.querySelector('.grande')!;
      let punto = document.getElementsByClassName('punto');
      console.log(i)
      console.log(grande)
      console.log(punto)
      let operacion = i * -25
      console.log(operacion)
      grande.style.transform = `translateX(${ operacion }%)`
      
      for (let index = 0; index < 4; index++) {
        punto[index].classList.remove('activo')  
      }
      punto[i].classList.add('activo')
  }
}
