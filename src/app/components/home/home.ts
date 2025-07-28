import { Component } from '@angular/core';
import { Product } from '../../schemas';
import { RouterLink } from '@angular/router';
import { GetService } from '../../services/get/get-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  query:string = `
    name
    price
    stock
    cost
    category
    shells
    id
    image
  `;
  constructor(private _service:GetService){
    _service.get_products(this.query, 10).subscribe((res:any)=>{
        this.products = res.data.get_products;
    });
  };

  products: Product[] = [];
}
