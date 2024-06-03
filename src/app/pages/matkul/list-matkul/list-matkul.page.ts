import { Component, OnInit } from '@angular/core';
import { Matkul } from './../../../shared/matkul/Matkul';
import { MatkulService } from './../../../shared/matkul/matkul.service';
@Component({
  selector: 'app-list-matkul',
  templateUrl: './list-matkul.page.html',
  styleUrls: ['./list-matkul.page.scss'],
})
export class ListMatkulPage implements OnInit {
  Matkul: any = [];
  constructor(private aptService: MatkulService) {}
  ngOnInit() {
    this.fetchMatkul();
    let MatkulRes = this.aptService.getMatkulList();
    MatkulRes.snapshotChanges().subscribe((res) => {
      this.Matkul = [];
      res.forEach((item) => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Matkul.push(a as Matkul);
      });
    });
  }
  fetchMatkul() {
    this.aptService
      .getMatkulList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteMatkul(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteMatkul(id);
    }
  }
}
