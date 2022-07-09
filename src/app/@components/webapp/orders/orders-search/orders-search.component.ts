import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrdersService } from 'src/app/@core/services/orders.service';

@Component({
  selector: 'app-orders-search',
  templateUrl: './orders-search.component.html',
  styleUrls: ['./orders-search.component.scss'],
})
export class OrdersSearchComponent implements OnInit {
  options: { shortName: any; fullName: any }[] = [];
  filteredOptions: Observable<any[]> = of([]);

  @Output() searchParams = new EventEmitter<any>();

  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getAllCurrencies().subscribe((resData: any) => {
      if (resData) {
        for (const property in resData) {
          this.options.push({
            shortName: property,
            fullName: resData[property],
          });
        }
      }
    });
  }

  onSearchChange(resData: any) {
    this.filteredOptions = of(this._filter(resData?.value || ''));
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: any) => {
      return option.shortName.toLowerCase().includes(filterValue);
    });
  }
}
