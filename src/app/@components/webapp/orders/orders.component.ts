import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { OrdersService } from 'src/app/@core/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  data: any[] | null = [];

  constructor(private ordersService: OrdersService) {}

  onGetCurrencyDetails(event: any) {
    this.data = null;

    this.ordersService.getCurrencyDetail(event).subscribe(
      (resData: any) => {
        if (resData) {
          let tempArray: any[] = [];

          for (const property in resData[event]) {
            tempArray?.push({
              name: property,
              value: resData[event][property],
              date: resData.date,
            });
          }

          this.data = tempArray;
        }
      },
      (error) => {
        this.data = [];

        window.alert(error.message);
      }
    );
  }
}
