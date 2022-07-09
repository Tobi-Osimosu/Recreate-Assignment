import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersSearchComponent } from './orders-search/orders-search.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { SharedModule } from 'src/app/@core/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
];

@NgModule({
  declarations: [OrdersComponent, OrdersSearchComponent, OrdersTableComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class OrdersModule {}
