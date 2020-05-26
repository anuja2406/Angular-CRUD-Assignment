import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FirestoreDataService } from './firestore-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppUiModule } from './app-ui.module';



@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    EditBlogComponent,
    BloglistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularEditorModule ,
    AppUiModule,

  ],
  providers: [FirestoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
