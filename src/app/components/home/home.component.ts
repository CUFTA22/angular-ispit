import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductModel } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchName: string = '';

  productList: ProductModel[] = [];
  basketList: ProductModel[] = [];
  total: number;

  displayedColumns: string[] = ['id', 'name', 'price', 'remove'];

  @ViewChild(MatTable) table: MatTable<ProductModel>;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProductList();
    this.getBasketList();
  }

  searchChange(newValue: string) {
    this.productList = this.productList.filter((p) =>
      p.name.includes(newValue)
    );

    if (!newValue) {
      this.getProductList();
    }
  }

  getProductList() {
    this.productList = this.productService.getProducts();
  }

  getBasketList() {
    this.total = 0;

    this.basketList.forEach((basket) => {
      this.total += basket.price;
    });
  }

  addBasket(product: ProductModel) {
    this.basketList.push(product);

    this.getBasketList();
    this.getProductList();
    this.table.renderRows();
  }

  deleteBasket(product: ProductModel) {
    this.basketList = this.basketList.filter((p) => p.id !== product.id);

    this.getBasketList();
    this.getProductList();
    this.table.renderRows();
  }

  openPaymentDialog(): void {
    const dialogRef = this.dialog.open(PaymentDialogComponent, {
      width: '50%',
      data: this.total,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.deleteBasket(result);
      }
    });
  }
}

@Component({
  selector: 'dialog-payment-component',
  templateUrl: './paymentDialog.html',
})
export class PaymentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick() {
    this.dialogRef.close();
  }
}
