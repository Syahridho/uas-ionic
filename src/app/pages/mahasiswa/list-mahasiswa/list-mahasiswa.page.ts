import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from './../../../shared/mahasiswa/Mahasiswa';
import { MahasiswaService } from './../../../shared/mahasiswa/mahasiswa.service';
@Component({
  selector: 'app-list-mahasiswa',
  templateUrl: './list-mahasiswa.page.html',
  styleUrls: ['./list-mahasiswa.page.scss'],
})
export class ListMahasiswaPage implements OnInit {
  Mahasiswa: any = [];
  constructor(private aptService: MahasiswaService) {}
  ngOnInit() {
    this.fetchMahasiswa();
    let MahasiswaRes = this.aptService.getMahasiswaList();
    MahasiswaRes.snapshotChanges().subscribe((res) => {
      this.Mahasiswa = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Mahasiswa.push(a as Mahasiswa);
      });
    });
  }
  fetchMahasiswa() {
    this.aptService
      .getMahasiswaList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteMahasiswa(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteMahasiswa(id);
    }
  }
}
