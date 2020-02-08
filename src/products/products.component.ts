import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
    selector:"app-products",
    templateUrl:"./products.component.html",

})

export class ProductsComponent{
    products;
    constructor(s:ProductsService){
        this.products=s.getProducts();
    }
}