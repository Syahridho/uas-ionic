import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { KrsService } from './../../../shared/krs/krs.service';
@Component({
  selector: 'app-make-krs',
  templateUrl: './make-krs.page.html',
  styleUrls: ['./make-krs.page.scss'],
})
export class MakeKrsPage implements OnInit {
  krsForm: FormGroup;
  constructor(
    private aptService: KrsService,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit() {
    this.krsForm = this.fb.group({
      nameMahasiswa: [''],
      nameMatkul: [''],
      semester: [''],
      tahun: [''],
    });
  }
  formSubmit() {
    if (!this.krsForm.valid) {
      return false;
    } else {
      return this.aptService
        .createKrs(this.krsForm.value)
        .then((res) => {
          console.log(res);
          this.krsForm.reset();
          this.router.navigate(['/list-krs']);
        })
        .catch((error) => console.log(error));
    }
  }
}
