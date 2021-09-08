import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogfromComponent } from './blogfrom/blogfrom.component';
import { FormsModule } from '@angular/forms'
const routes: Routes = [
  {path:'list',component:BloglistComponent},
  {path:'create',component:BlogfromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,FormsModule],
  exports: [RouterModule,BloglistComponent,BlogfromComponent],
  declarations:[BloglistComponent,BlogfromComponent]
})
export class AppRoutingModule { }
