import { Component } from '@angular/core';
import { Shell } from '../../schemas';
import { GetService } from '../../services/get/get-service';

@Component({
  selector: 'app-shells',
  imports: [],
  templateUrl: './shells.html',
  styleUrl: './shells.css'
})
export class Shells {
  shells:Shell[] = [];
  query = `
    date
    first_quote
    quantity
    description
  `;

  constructor(private _service:GetService){
    _service.get_shells(this.query, 10).subscribe((res:any)=>{
        this.shells = res.data.get_shells;
    });
  };
}
