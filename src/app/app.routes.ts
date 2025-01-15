import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieAddComponent } from './pages/movie-add/movie-add.component';
import { MovieEditComponent } from './pages/movie-edit/movie-edit.component';
import { LoginGoogleComponent } from './components/login-google/login-google.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hola-mundo', component: HelloWorldComponent },
    { path: 'movies', component: MovieListComponent, canActivate: [AuthGuard] },
    { path: 'peliculas/anadir', component: MovieAddComponent, canActivate: [AuthGuard] },
    { path: 'peliculas/editar/:id', component: MovieEditComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginGoogleComponent },
    { path: '**', redirectTo: 'empresas', pathMatch: 'full' } // Redirigir cualquier ruta no encontrada a la página de películas
];