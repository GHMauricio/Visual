import { Routes } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Testcomponent } from './components/testcomponent/testcomponent';
import { TestListar } from './components/testcomponent/test-listar/test-listar';
import { TestInsertar } from './components/testcomponent/test-insertar/test-insertar';
import { TestEditar } from './components/testcomponent/test-editar/test-editar';
import { Detalletestcomponent } from './components/detalletestcomponent/detalletestcomponent';
import { DetalleTestListar } from './components/detalletestcomponent/detalletest-listar/detalletest-listar';
import { DetalleTestInsertar } from './components/detalletestcomponent/detalletest-insertar/detalletest-insertar';
import { DetalleTestEditar } from './components/detalletestcomponent/detalletest-editar/detalletest-editar';

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
