import { NgModule } from '@angular/core';
import { WebappComponent } from './webapp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/@core/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full',
  },

  {
    path: '',
    component: WebappComponent,
    children: [
      {
        path: 'orders',
        loadChildren: () =>
          import('src/app/@components/webapp/orders/orders.module').then(
            (m) => m.OrdersModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [WebappComponent, SidebarComponent, NavbarComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class WebappModule {}
