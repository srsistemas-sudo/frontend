import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../schemas';
import { GetService } from '../../services/get/get-service';

@Component({
  selector: 'app-search',
  imports: [RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  products:Product[] = [];
  target:string = '';
  get: string = `
    name
    price
    stock
    cost
    category
    shells
    id
    image
  `

  constructor(private params: ActivatedRoute, private _service: GetService) {
    this.target = params.snapshot.paramMap.get('name') || '';
    console.log(this.target);
    this._service.search_product(this.get, this.target).subscribe((res: any) => {
      this.products = res.data.search_product;
    });
  }

}
