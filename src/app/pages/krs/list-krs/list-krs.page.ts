import { Component, OnInit } from '@angular/core';
import { Krs } from './../../../shared/krs/Krs';
import { KrsService } from './../../../shared/krs/krs.service';
@Component({
  selector: 'app-list-krs',
  templateUrl: './list-krs.page.html',
  styleUrls: ['./list-krs.page.scss'],
})
export class ListKrsPage implements OnInit {
  Krs: any = [];
  constructor(private aptService: KrsService) {}
  ngOnInit() {
    this.fetchKrs();
    let KrsRes = this.aptService.getKrsList();
    KrsRes.snapshotChanges().subscribe((res) => {
      this.Krs = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Krs.push(a as Krs);
      });
    });
  }
  fetchKrs() {
    this.aptService
      .getKrsList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteKrs(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteKrs(id);
    }
  }
}
