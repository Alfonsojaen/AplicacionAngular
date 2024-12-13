import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyAddComponent } from './pages/company-add/company-add.component';
import { CompanyEditComponent } from './pages/company-edit/company-edit.component';
import { LoginGoogleComponent } from './components/login-google/login-google.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hola-mundo', component: HelloWorldComponent },
    { path: 'empresas', component: CompanyListComponent, canActivate: [AuthGuard]  },
    { path: 'empresas/anadir', component: CompanyAddComponent, canActivate: [AuthGuard] },
    { path: 'empresas/editar/:id', component: CompanyEditComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginGoogleComponent }
];