import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';

const isProduction = environment.production;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([], { developmentMode: !isProduction }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: isProduction }),
    NgxsLoggerPluginModule.forRoot({ disabled: isProduction }),
    HomeModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
