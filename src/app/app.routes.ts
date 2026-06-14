import { Routes } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Testcomponent } from './components/testcomponent/testcomponent';
import { TestListar } from './components/testcomponent/test-listar/test-listar';
import { TestInsertar } from './components/testcomponent/test-insertar/test-insertar';
import { TestEditar } from './components/testcomponent/test-editar/test-editar';

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
];