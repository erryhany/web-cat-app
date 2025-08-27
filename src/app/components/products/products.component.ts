import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/productsService';
import {Product} from '../../model/product.model';
import {AsyncPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import {AppDataState, DataStateEnum} from '../../state/product.state';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    NgSwitch,
    NgSwitchCase,
    FormsModule
  ],
  templateUrl: './products.component.html',
  standalone: true,
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
products$:Observable<AppDataState<Product[]>> |null=null;
readonly DataStateEnum= DataStateEnum;
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {

  }

  onGetAllProducts() {
    this.products$=
      this.productsService.getAllProducts().pipe(
        map(data=>{
          console.log(data);
          return({dataState:DataStateEnum.LOADED,data:data})

        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

      );

  }

  onGetSelectedProducts() {
    this.products$=
      this.productsService.getSelectedProducts().pipe(
        map(data=>{
          console.log(data);
          return({dataState:DataStateEnum.LOADED,data:data})

        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

      );
  }

  onGetAvailableProducts() {
    this.products$=
      this.productsService.getAvailableProducts().pipe(
        map(data=>{
          console.log(data);
          return({dataState:DataStateEnum.LOADED,data:data})

        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

      );

  }

  onSearch(dataForm: any) {

    this.products$=
      this.productsService.searchProducts(dataForm.keyword).pipe(
        map(data=>{
          console.log(data);
          return({dataState:DataStateEnum.LOADED,data:data})

        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

      );
  }
}
