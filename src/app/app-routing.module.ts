import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from "./contact-detail/contact-detail.component"
import { ContactComponent } from "./contact/contact.component"
const routes: Routes = [
  {path: 'contact/:id' , component: ContactDetailComponent},
  {path: 'contacts' , component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
