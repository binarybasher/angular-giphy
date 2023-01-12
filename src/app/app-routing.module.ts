import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// didn't end up using routes, but if the app needs more functionality we'll probably add routes for scaling
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
