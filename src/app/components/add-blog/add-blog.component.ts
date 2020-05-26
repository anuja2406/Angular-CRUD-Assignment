import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from 'src/app/firestore-data.service';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormGroup,FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})


export class AddBlogComponent implements OnInit {

  topicsList: any = ['Travel', 'Movie Review', 'Poem']
  
   
 
  constructor(public service:FirestoreDataService,
    private firestore : AngularFirestore,
    private toaster:ToastrService) { 
      
    }

  ngOnInit(): void {
    this.resetBlogs();
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
   
    toolbarPosition: 'top',
  
  };

  resetBlogs(form?:NgForm){
     if(form!=null)

     form.resetForm();
    this.service.blogData={
      id:null,
      title:'',
      description:'',
      date:'',
      topic:''

    }
  }

 

  changetopic(e) {
    
    console.log(e.target.value);
  }

  onSubmit(form:NgForm){
    let data = form.value;
    console.log(data);
    this.firestore.collection('blogs').add(data);
    this.resetBlogs(form);
    this.toaster.success("Blog Added to Database Succesfully","My-Blogger");
  }


}
