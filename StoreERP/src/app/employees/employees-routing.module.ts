import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { ActivityComponent } from './activity/activity.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      {
        path: 'activity',
        component: ActivityComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'role',
        component: RoleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class EmployeesRoutingModule {
}

