import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/Blogs/blog-details/blog-details.component';
import { BlogComponent } from './components/Blogs/blog/blog.component';
// import { BlogDetailsComponent } from './blog-details/blog-details.component';
// import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: 'blog', component: BlogComponent },
  {path: "blog/:id", component: BlogDetailsComponent},
  {path: "**", component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
