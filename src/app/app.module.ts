import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClarityModule } from "clarity-angular";

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { APP_BASE_HREF } from '@angular/common';
import { ContactComponent } from './common/contact/contact.component';
import { FlickerComponent } from './common/flicker/flicker.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'photos', component: FlickerComponent },
  //{ path: 'path-name/:id', component: ChildComponentName },
  /* {
    path: 'accueil',
    component: WelcomeComponent,
    data: { title: 'Heroes List' } // look for what it is used for
  }, */
  {
    path: '',
    redirectTo: '/welcome', // ok this one i know
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent } // tout le reste ? 
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ContactComponent,
    FlickerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    FormsModule,
    NgbModule.forRoot(),
    ClarityModule.forRoot()
  ],
  exports: [NavbarComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
