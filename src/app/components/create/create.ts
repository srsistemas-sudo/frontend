import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../schemas';
import { UpdateService } from '../../services/update/update-service';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  
  constructor(private _service:UpdateService) {};

  send(){
    this._service.new_product(this.product.category, this.product.name, this.product.cost, this.product.page, this.product.price, this.product.stock, this.product.image).subscribe((res:any) => {
      alert(res.data.new_shell);
    });
  };

  product = {
    name:'',
    price:0,
    cost:0,
    category:'',
    stock:0,
    page:'',
    image:''
  }
}
