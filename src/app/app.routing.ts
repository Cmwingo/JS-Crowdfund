import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ListViewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
