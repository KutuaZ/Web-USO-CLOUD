import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Vps } from './pages/vps/vps';
import { Contenedores } from './pages/contenedores/contenedores';
import { BasesDatos } from './pages/bases-datos/bases-datos'; 
import { Aiops } from './pages/aiops/aiops';
import { Compra } from './pages/compra/compra';
import { Perfil } from './pages/perfil/perfil';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Recuperar } from './pages/recuperar/recuperar';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'vps', component: Vps },
    { path: 'contenedores', component: Contenedores },
    { path: 'bases-datos', component: BasesDatos },
    { path: 'aiops', component: Aiops },
    { path: 'compra', component: Compra },
    { path: 'perfil', component: Perfil },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'recuperar', component: Recuperar },
    { path: '**', redirectTo: '' }
];
