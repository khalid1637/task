import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { ImageapiComponent } from './imageapi/imageapi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtmComponent } from './atm/atm.component';
 


@NgModule({
  declarations: [
    AppComponent,
    ImageapiComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule,
   ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
