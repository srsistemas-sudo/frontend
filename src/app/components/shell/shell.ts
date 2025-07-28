import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateService } from '../../services/update/update-service';
import { map } from 'rxjs';

@Component({
  selector: 'app-shell',
  imports: [FormsModule],
  templateUrl: './shell.html',
  styleUrl: './shell.css'
})
export class Shell {
  constructor(private params: ActivatedRoute, private _service:UpdateService) {
    this.data.id = params.snapshot.paramMap.get('id') || '';
  }

  send(){
    this._service.new_shell(this.data.date, this.data.id, this.data.quantity, this.data.first_quote, this.data.description).subscribe((res:any) => {
      alert(res.data.new_shell);
    });
  };

  transformer(e:any){
    if(e.data == null){
      this.data.description += '<br>';
    }else{this.data.description += e.data};
  }

  data = {
    id:'',
    first_quote:0,
    quantity:1,
    date:'',
    description:''
  }
}
