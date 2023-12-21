import { Product } from "./product";

export class Order{

    id!:number;
    customerid!:number;
    product!:Product;
    quantity:number=1;
    constructor(product:Product,customerId:number){
        this.product=product;
        this.totalPrice;
        this.customerid=customerId;
    }
    get totalPrice():number{
        return this.quantity*this.product.Price
    }
}