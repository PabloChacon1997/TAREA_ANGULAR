import {
    BrowserModule
    } from '@angular/platform-browser';
    import {
    NgModule
    } from '@angular/core';

    import{
        Problema4Component
    }from './problema4.component';

    import{
        ArticulosService
    }from './articulos.service';

    @NgModule({
        declarations:[
            Problema4Component
        ],
        imports:[
            BrowserModule
        ],
        providers:[ArticulosService],
        bootstrap:[Problema4Component]

    })
    export class Problema4Module{}