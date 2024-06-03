import { Injectable } from '@angular/core';
import { Mahasiswa } from './Mahasiswa';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class MahasiswaService {
  mahasiswaListRef: AngularFireList<any>;
  mahasiswaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.mahasiswaListRef = this.db.list('/mahasiswa');
  }

  // Create
  createMahasiswa(apt: Mahasiswa) {
    return this.mahasiswaListRef.push({
      nim: apt.nim,
      name: apt.name,
      jurusan: apt.jurusan,
    });
  }

  // Get Single
  getMahasiswa(id: string) {
    this.mahasiswaRef = this.db.object('/mahasiswa/' + id);
    return this.mahasiswaRef;
  }

  // Get List
  getMahasiswaList() {
    this.mahasiswaListRef = this.db.list('/mahasiswa');
    return this.mahasiswaListRef;
  }

  // Update
  updateMahasiswa(id: string, apt: Mahasiswa) {
    this.mahasiswaRef = this.db.object('/mahasiswa/' + id);
    return this.mahasiswaRef.update({
      nim: apt.nim,
      name: apt.name,
      jurusan: apt.jurusan,
    });
  }

  // Delete
  deleteMahasiswa(id: string) {
    this.mahasiswaRef = this.db.object('/mahasiswa/' + id);
    return this.mahasiswaRef.remove();
  }
}
