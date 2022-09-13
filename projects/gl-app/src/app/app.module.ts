import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppProvidersModule } from './app-providers.module';
import { AppStateModule } from './app-state.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    AppProvidersModule,
    AppStateModule,
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
