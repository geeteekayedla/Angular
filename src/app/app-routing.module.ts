import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CityComponent } from './components/city/city.component';
//import { AppComponent } from './app.component';


export const routes: Routes = [
  {path:'cities',component:CityComponent},
  {path:'contacts',component:ContactsComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
