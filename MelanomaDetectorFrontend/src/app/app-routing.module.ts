import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from "./homepage/homepage.component";
import { ArticlesComponent } from "./articles/articles.component";
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent} from "./contact-page/contact-page.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticlesComponent},
  { path: 'contact', component: ContactPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
