import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatkulService } from './../../../shared/matkul/matkul.service';
@Component({
  selector: 'app-make-matkul',
  templateUrl: './make-matkul.page.html',
  styleUrls: ['./make-matkul.page.scss'],
})
export class MakeMatkulPage implements OnInit {
  matkulForm: FormGroup;
  constructor(
    private aptService: MatkulService,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit() {
    this.matkulForm = this.fb.group({
      kode: [''],
      name: [''],
      sks: [''],
      dosen: [''],
    });
  }
  formSubmit() {
    if (!this.matkulForm.valid) {
      return false;
    } else {
      return this.aptService
        .createMatkul(this.matkulForm.value)
        .then((res) => {
          console.log(res);
          this.matkulForm.reset();
          this.router.navigate(['/list-matkul']);
        })
        .catch((error) => console.log(error));
    }
  }
}
