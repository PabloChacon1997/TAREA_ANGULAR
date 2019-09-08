import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { APP_ROUT } from './app.routes';
import { Problema1Component } from './problema1/problema1.component';
import { FormsModule } from '@angular/forms';
import { Problema2Component } from './problema2/problema2.component';
import { Problema3Component } from './problema3/problema3.component';
import { Problema4Component } from './problema4/problema4.component';
import { Problema5Component } from './problema5/problema5.component';
import { Problema6Component } from './problema6/problema6.component';
import { ElementosModule } from './problema6/elementos/elementos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    Problema1Component,
    Problema2Component,
    Problema3Component,
    Problema4Component,
    Problema5Component,
    Problema6Component
  ],
  imports: [
    BrowserModule,
    APP_ROUT,
    FormsModule,
    ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
