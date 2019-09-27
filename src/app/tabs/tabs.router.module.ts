import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            canActivate: [AuthGuard],
            data: {
              roles: 'ADMIN'
            },
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: 'dashboard',
            canActivate: [AuthGuard],
            data: {
              roles: 'USER'
            },
            loadChildren: () =>
              import('../user-dashboard/user-dashboard.module').then(m => m.UserDashboardPageModule)
          }
        ]
      },
      {
        path: 'quotations',
        children: [
          {
            path: '',
            canActivate: [AuthGuard],
            loadChildren: () =>
              import('../quotations/quotations.module').then(m => m.QuotationsPageModule)
          }
        ]
      },
      {
        path: 'invoices',
        children: [
          {
            path: '',
            canActivate: [AuthGuard],
            loadChildren: () =>
              import('../invoices/invoices.module').then(m => m.InvoicesPageModule)
          }
        ]
      },
      {
        path: 'customers',
        children: [
          {
            path: '',
            canActivate: [AuthGuard],
            loadChildren: () =>
              import('../customers/customers.module').then(m => m.CustomersPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
