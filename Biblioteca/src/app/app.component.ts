import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteca';

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
