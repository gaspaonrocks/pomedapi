import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClarityModule } from "clarity-angular";

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
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
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    NgbModule.forRoot(),
    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
