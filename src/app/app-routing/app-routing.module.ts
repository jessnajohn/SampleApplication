import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AreaComponent } from '../area/area.component';





const routes: Routes = [
  { path: '', redirectTo: '/area',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'area', component: AreaComponent }
];


@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
