import { Routes, RouterModule } from '@angular/router';
import { LazyPageComponent } from './components/lazy-page/lazy-page.component';

const moduleRoutes: Routes = [
    {
        path: '',
        component: LazyPageComponent
    }
];


export const routingModule = RouterModule.forChild(moduleRoutes);
