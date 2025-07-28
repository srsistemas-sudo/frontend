export interface Product{
    name:string,
    stock:number,
    price:number,
    cost:number,
    shells:Shell[],
    category:string,
    page:string,
    id:string,
    image:string,
}

export interface Shell{
    date:string,
    first_quote:number,
    description:string,
    id:string,
    quantity:number,
    datems:number
}