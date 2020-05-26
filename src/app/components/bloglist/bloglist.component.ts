import { Component, OnInit } from '@angular/core';
import {FirestoreDataService} from 'src/app/firestore-data.service';
import { Blogs } from 'src/app/blogs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  list:Blogs[];
  blogs: any;
  constructor(private service :FirestoreDataService,
    private firestore:AngularFirestore,
    private toster:ToastrService
    ) { }

 

ngOnInit() {
  this.service.getBlogs().subscribe(data => {

    this.blogs= data.map(e => {
      return {
        id: e.payload.doc.id,
        title: e.payload.doc.data()['title'],
        topic:e.payload.doc.data()['topic'],
        description: e.payload.doc.data()['description'],
        date: e.payload.doc.data()['date'],

      };
    })
   // console.log(this.blogs);

  });
}

        
 removeRecord(id:string){
          //console.log(id);
          if(confirm("Are You sure to delete this blog")){
            console.log('blog/'+id);
            this.firestore.doc('blogs/'+ id).delete();
            this.toster.warning('Deleted Succesfully','Angular Blog');
          }
        }  
        
        editRecord(record) {
          record.isEdit = true;
          record.EditTitle = record.title;
          record.EditDescription = record.description;
        
        }
      
        UpdateRecord(recordRow) {
          let record = {};
          record['title'] = recordRow.EditTitle;
          record['description'] = recordRow.EditDescription;
          this.service.update_blog(recordRow.id, record);
          recordRow.isEdit = false; 
        }     

}


