import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private apollo:Apollo) { }

  get_products(get:string, limit:number){
    let query = gql(`
      query MyQuery {
          get_products(limit: ${limit}) {
          ${get}
          }
      }
    `);
    return this.apollo.watchQuery({
      query: query
    }).valueChanges;
  }
  
  get_shells(get: string, limit: number) {
    let query = gql(`
      query MyQuery {
          get_shells(limit: ${limit}) {
          ${get}
          }
      }
    `);
    return this.apollo.watchQuery({
      query: query
    }).valueChanges;
  }

  get_shells_product(get: string, ids: string) {
    console.log(ids);
    let query = gql(`
      query MyQuery {
          get_shells_product(ids: "${ids}") {
          ${get}
          }
      }
    `);
    return this.apollo.watchQuery({
      query: query
    }).valueChanges;
  }

  search_product(get:string, target:string){
    let query = gql(`
      query MyQuery {
          search_product(name: "${target}") {
          ${get}
          }
      }
    `);
    return this.apollo.watchQuery({
      query: query
    }).valueChanges;
  }
  
}
