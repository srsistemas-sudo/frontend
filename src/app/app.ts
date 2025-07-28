import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'system';

  constructor(private router:Router){}

  eval(data:string){
    this.router.navigate(['/search/' + data]);
  }
}
