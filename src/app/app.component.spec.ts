import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkStubDirective } from '../../e2e/router-stubs';
import { APP_BASE_HREF } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClarityModule } from "clarity-angular";

const appRoutes = [
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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        WelcomeComponent,
        RouterLinkStubDirective
      ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
        ),
        NgbModule.forRoot(),
        ClarityModule.forRoot()
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents()
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // trigger initial data binding
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
