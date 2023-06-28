import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'archives', component:ArchivesComponent},
  { path: 'list', component:ListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
