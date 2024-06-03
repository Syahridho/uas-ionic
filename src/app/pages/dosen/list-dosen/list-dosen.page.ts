import { Component, OnInit } from '@angular/core';
import { Dosen } from './../../../shared/dosen/Dosen';
import { DosenService } from './../../../shared/dosen/dosen.service';
@Component({
  selector: 'app-list-dosen',
  templateUrl: './list-dosen.page.html',
  styleUrls: ['./list-dosen.page.scss'],
})
export class ListDosenPage implements OnInit {
  Dosen: any = [];
  constructor(private aptService: DosenService) {}
  ngOnInit() {
    this.fetchDosen();
    let DosenRes = this.aptService.getDosenList();
    DosenRes.snapshotChanges().subscribe((res) => {
      this.Dosen = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Dosen.push(a as Dosen);
      });
    });
  }
  fetchDosen() {
    this.aptService
      .getDosenList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteDosen(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteDosen(id);
    }
  }
}
