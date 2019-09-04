import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { Problema1Component } from './problema1/problema1.component';
import { Problema2Component } from './problema2/problema2.component';
import { Problema3Component } from './problema3/problema3.component';
import { Problema4Component } from './problema4/problema4.component';
import { Problema5Component } from './problema5/problema5.component';
import { Problema6Component } from './problema6/problema6.component';

const ROUTES: Routes = [
    {path: 'body', component: BodyComponent },
    {path: 'problema1', component: Problema1Component},
    {path: 'problema2', component: Problema2Component},
    {path: 'problema3', component: Problema3Component},
    {path: 'problema4', component: Problema4Component},
    {path: 'problema5', component: Problema5Component},
    {path: 'problema6', component: Problema6Component},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUT = RouterModule.forRoot(ROUTES);