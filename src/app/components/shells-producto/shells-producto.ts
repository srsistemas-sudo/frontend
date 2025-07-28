import { Component } from '@angular/core';
import { Shell } from '../../schemas';
import { GetService } from '../../services/get/get-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shells-producto',
  imports: [],
  templateUrl: './shells-producto.html',
  styleUrl: './shells-producto.css'
})
export class ShellsProducto {
  shells:Shell[] = [];
  ids:string = '';
  query = `
    date
    first_quote
    quantity
    description
  `;

  constructor(private _service:GetService, private params:ActivatedRoute){
    this.ids = params.snapshot.paramMap.get('ids') || '';
    _service.get_shells_product(this.query, this.ids).subscribe((res:any)=>{
        this.shells = res.data.get_shells_product;
    });
  };
}
