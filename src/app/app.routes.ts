import { Routes } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Testcomponent } from './components/testcomponent/testcomponent';
import { TestListar } from './components/testcomponent/test-listar/test-listar';
import { TestInsertar } from './components/testcomponent/test-insertar/test-insertar';
import { TestEditar } from './components/testcomponent/test-editar/test-editar';
import { Eventocomponent } from './components/eventocomponent/eventocomponent';
import { EventoListar } from './components/eventocomponent/evento-listar/evento-listar';
import { EventoInsertar } from './components/eventocomponent/evento-insertar/evento-insertar';
import { EventoEditar } from './components/eventocomponent/evento-editar/evento-editar';
import { Usuariolistar } from './components/usuariocomponents/usuariolistar/usuariolistar';
import { Usuarioinsertar } from './components/usuariocomponents/usuarioinsertar/usuarioinsertar';
import { Usuarioactualizar } from './components/usuariocomponents/usuarioactualizar/usuarioactualizar';
import { Detalletestcomponent } from './components/detalletestcomponent/detalletestcomponent';
import { DetalleTestListar } from './components/detalletestcomponent/detalletest-listar/detalletest-listar';
import { DetalleTestInsertar } from './components/detalletestcomponent/detalletest-insertar/detalletest-insertar';
import { DetalleTestEditar } from './components/detalletestcomponent/detalletest-editar/detalletest-editar';
import { Entrevistacomponent } from './components/entrevistacomponent/entrevistacomponent';
import { Entrevistalistar } from './components/entrevistacomponent/entrevistalistar/entrevistalistar';
import { Entrevistainsertar } from './components/entrevistacomponent/entrevistainsertar/entrevistainsertar';
import { Entrevistaactualizar } from './components/entrevistacomponent/entrevistaactualizar/entrevistaactualizar';
import { Usuariocomponents } from './components/usuariocomponents/usuariocomponents';



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'homes',
        pathMatch: 'full'
    },
    {
        path: 'homes',
        component: Homecomponent
    },  
    {
        path: 'tests',
        component: Testcomponent,
        children: [
            { path: 'listar', component: TestListar },
            { path: 'nuevo', component: TestInsertar },
            { path: 'editar/:id', component: TestEditar }
        ]
    },
    {
        path: 'eventos',
        component: Eventocomponent,
        children: [
            { path: 'listar', component: EventoListar },
            { path: 'nuevo', component: EventoInsertar },
            { path: 'editar/:id', component: EventoEditar }
        ]
    },
    {
        path: 'detallestest',
        component: Detalletestcomponent,
        children: [
            { path: 'listar', component: DetalleTestListar },
            { path: 'nuevo', component: DetalleTestInsertar },
            { path: 'editar/:id', component: DetalleTestEditar }
        ]
      },
  { 
        path: 'usuarios',
        component: Usuariocomponents,
        children: [
            { path: 'listar', component: Usuariolistar },
            { path: 'registrar', component: Usuarioinsertar },
            { path: 'editar/:id', component: Usuarioactualizar }
        ]
    },
  { 
        path: 'entrevistas',
        component: Entrevistacomponent,
        children: [
            { path: 'listar', component: Entrevistalistar },
            { path: 'registrar', component: Entrevistainsertar },
            { path: 'editar/:id', component: Entrevistaactualizar }
        ]
    },
];
