import { Injectable } from '@angular/core';
import { Matkul } from './Matkul';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class MatkulService {
  matkulListRef: AngularFireList<any>;
  matkulRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.matkulListRef = this.db.list('/matkul');
  }

  // Create
  createMatkul(apt: Matkul) {
    return this.matkulListRef.push({
      kode: apt.kode,
      name: apt.name,
      sks: apt.sks,
      dosen: apt.dosen,
    });
  }

  // Get Single
  getMatkul(id: string) {
    this.matkulRef = this.db.object('/matkul/' + id);
    return this.matkulRef;
  }

  // Get List
  getMatkulList() {
    this.matkulListRef = this.db.list('/matkul');
    return this.matkulListRef;
  }

  // Update
  updateMatkul(id: string, apt: Matkul) {
    this.matkulRef = this.db.object('/matkul/' + id);
    return this.matkulRef.update({
      kode: apt.kode,
      name: apt.name,
      sks: apt.sks,
      dosen: apt.dosen,
    });
  }

  // Delete
  deleteMatkul(id: string) {
    this.matkulRef = this.db.object('/matkul/' + id);
    return this.matkulRef.remove();
  }
}
