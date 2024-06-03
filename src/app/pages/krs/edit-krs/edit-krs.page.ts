import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KrsService } from './../../../shared/krs/krs.service';

@Component({
  selector: 'app-edit-krs',
  templateUrl: './edit-krs.page.html',
  styleUrls: ['./edit-krs.page.scss'],
})
export class EditKrsPage implements OnInit {
  updateKrsForm: FormGroup;
  id: string;

  constructor(
    private aptService: KrsService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.updateKrsForm = this.fb.group({
      nameMahasiswa: ['', Validators.required],
      nameMatkul: ['', Validators.required],
      semester: ['', Validators.required],
      tahun: ['', Validators.required],
    });

    this.aptService
      .getKrs(this.id)
      .valueChanges()
      .subscribe((res) => {
        if (res) {
          this.updateKrsForm.setValue({
            nameMahasiswa: res.nameMahasiswa || '',
            nameMatkul: res.nameMatkul || '',
            semester: res.semester || '',
            tahun: res.tahun || '',
          });
        }
      });
  }

  updateForm() {
    this.aptService
      .updateKrs(this.id, this.updateKrsForm.value)
      .then(() => {
        this.router.navigate(['/list-krs']);
      })
      .catch((error) => console.log(error));
  }
}
