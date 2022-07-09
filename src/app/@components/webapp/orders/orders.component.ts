import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/@core/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  data: any[] | null = null;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    // this.ordersService.getAllCurrencies().subscribe((resData) => {
    //   console.log(resData);
    // });
  }

  onGetCurrencyDetails(event: any) {
    this.data = null;
    console.log(event);
  }
}
