import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LibModule } from 'lib';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    AppRoutingModule,
    LibModule,
    PagesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          link: httpLink.create({
            uri: 'http://localhost:4000/graphql'
          })
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
