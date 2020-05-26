import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBlogComponent} from 'src/app/components/add-blog/add-blog.component'
import {EditBlogComponent} from 'src/app/components/edit-blog/edit-blog.component'
import {BloglistComponent} from 'src/app/components/bloglist/bloglist.component'


const routes: Routes = [
  {path:'add-blog',component:AddBlogComponent},
  {path:'edit-blog',component:EditBlogComponent},
  {path:'',component:BloglistComponent,pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
