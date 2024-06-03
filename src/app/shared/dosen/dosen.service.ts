import { Injectable } from '@angular/core';
import { Dosen } from './Dosen';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class DosenService {
  dosenListRef: AngularFireList<any>;
  dosenRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.dosenListRef = this.db.list('/dosen');
  }

  // Create
  createDosen(apt: Dosen) {
    return this.dosenListRef.push({
      nid: apt.nid,
      name: apt.name,
    });
  }

  // Get Single
  getDosen(id: string) {
    this.dosenRef = this.db.object('/dosen/' + id);
    return this.dosenRef;
  }

  // Get List
  getDosenList() {
    this.dosenListRef = this.db.list('/dosen');
    return this.dosenListRef;
  }

  // Update
  updateDosen(id: string, apt: Dosen) {
    this.dosenRef = this.db.object('/dosen/' + id);
    return this.dosenRef.update({
      nid: apt.nid,
      name: apt.name,
    });
  }

  // Delete
  deleteDosen(id: string) {
    this.dosenRef = this.db.object('/dosen/' + id);
    return this.dosenRef.remove();
  }
}
