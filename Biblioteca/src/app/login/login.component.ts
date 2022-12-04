import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:string=""
  ac:string=""
  constructor(private activatedRoute:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    // this.router.navigate(['/About-us'])
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.ac = params['ac'];
      localStorage.setItem('h', "0");




    });
  }

  enviar(){
    const password  = document.getElementById("password") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;    
    if(name.value=="SoyUnAdministrador" &&password .value=="TeLojuro"){
        var a=new Date().getTime()
        a=a+83600000
        localStorage.setItem('h', a.toString());
        var routes:any
        routes = {
          1: "/Input",
          2: "/EditaPlantas/" + this.id,
          3: "/EditaAves/" + this.id,
          4: "/EditaInsectos/" + this.id
        };
        this.Router.navigate([routes[this.ac]]);
    }
  }

}
