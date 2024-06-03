import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatkulService } from './../../../shared/matkul/matkul.service';

@Component({
  selector: 'app-edit-matkul',
  templateUrl: './edit-matkul.page.html',
  styleUrls: ['./edit-matkul.page.scss'],
})
export class EditMatkulPage implements OnInit {
  updateMatkulForm: FormGroup;
  id: string;

  constructor(
    private aptService: MatkulService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.updateMatkulForm = this.fb.group({
      kode: ['', Validators.required],
      name: ['', Validators.required],
      sks: ['', Validators.required],
      dosen: ['', Validators.required],
    });

    this.aptService
      .getMatkul(this.id)
      .valueChanges()
      .subscribe((res) => {
        if (res) {
          this.updateMatkulForm.setValue({
            kode: res.kode || '',
            name: res.name || '',
            sks: res.sks || '',
            dosen: res.dosen || '',
          });
        }
      });
  }

  updateForm() {
    this.aptService
      .updateMatkul(this.id, this.updateMatkulForm.value)
      .then(() => {
        this.router.navigate(['/list-matkul']);
      })
      .catch((error) => console.log(error));
  }
}
