import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  @Output() Emitter = new EventEmitter();
  target:string = '';
  
  search(e:any){
    if(e.key == 'Enter'){
      this.Emitter.emit(this.target);
    }
  }
}
