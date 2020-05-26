import { Injectable } from '@angular/core';

import {Blogs} from './blogs'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
  blogData :Blogs;
  constructor(private firestore :AngularFirestore) { }


  getBlogs(){
   // console.log(this.firestore.collection('blogs').snapshotChanges());
    return this.firestore.collection('blogs').snapshotChanges();

  }

  update_blog(recordID,record){
    this.firestore.doc('blogs/' + recordID).update(record);
  }

 
}
