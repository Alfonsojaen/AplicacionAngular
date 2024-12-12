import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyAddComponent } from './pages/company-add/company-add.component';
import { CompanyEditComponent } from './pages/company-edit/company-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hola-mundo', component: HelloWorldComponent },
    { path: 'empresas', component: CompanyListComponent },
    { path: 'empresas/anadir', component: CompanyAddComponent},
    { path: 'empresas/editar/:id', component: CompanyEditComponent }
];