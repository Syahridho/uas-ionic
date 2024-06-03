import { Injectable } from '@angular/core';
import { Krs } from './Krs';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class KrsService {
  krsListRef: AngularFireList<any>;
  krsRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.krsListRef = this.db.list('/krs');
  }

  // Create
  createKrs(apt: Krs) {
    return this.krsListRef.push({
      nameMahasiswa: apt.nameMahasiswa,
      nameMatkul: apt.nameMatkul,
      semester: apt.semester,
      tahun: apt.tahun,
    });
  }

  // Get Single
  getKrs(id: string) {
    this.krsRef = this.db.object('/krs/' + id);
    return this.krsRef;
  }

  // Get List
  getKrsList() {
    this.krsListRef = this.db.list('/krs');
    return this.krsListRef;
  }

  // Update
  updateKrs(id: string, apt: Krs) {
    this.krsRef = this.db.object('/krs/' + id);
    return this.krsRef.update({
      nameMahasiswa: apt.nameMahasiswa,
      nameMatkul: apt.nameMatkul,
      semester: apt.semester,
      tahun: apt.tahun,
    });
  }

  // Delete
  deleteKrs(id: string) {
    this.krsRef = this.db.object('/krs/' + id);
    return this.krsRef.remove();
  }
}
