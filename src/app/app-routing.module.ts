import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AtmComponent } from './atm/atm.component';
import { ImageapiComponent } from './imageapi/imageapi.component';


const routes: Routes = [
  {path:'nextpage',component:AtmComponent},
  {path:'image',component:ImageapiComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
