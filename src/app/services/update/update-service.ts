import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private apollo:Apollo) { }

  new_shell(date:string, index:string, quantity:number, firts_quote:number, description:string){
    console.log(firts_quote);
    let query = `
      query MyQuery {
          new_shell(date: "${date}", index: "${index}", quantity: ${quantity}, first_quote: ${firts_quote}, description: "${description}")
      }
    `;
    console.log('sws', query);
    return this.apollo.watchQuery({
      query: gql(query)
    }).valueChanges;
  };

  new_product(category:string, name:string, cost:number, page:string, price:number, stock:number, image:string){
    let query = gql(`
      query MyQuery {
          new_product(category: "${category}", name: "${name}", cost: ${cost}, page: "${page}", price: ${price}, stock: ${stock}, image: "${image}")
      }
    `);
    return this.apollo.watchQuery({
      query: query
    }).valueChanges;
  };
}
