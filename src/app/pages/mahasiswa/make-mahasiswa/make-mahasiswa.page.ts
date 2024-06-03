import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MahasiswaService } from './../../../shared/mahasiswa/mahasiswa.service';
@Component({
  selector: 'app-make-mahasiswa',
  templateUrl: './make-mahasiswa.page.html',
  styleUrls: ['./make-mahasiswa.page.scss'],
})
export class MakeMahasiswaPage implements OnInit {
  mahasiswaForm: FormGroup;
  constructor(
    private aptService: MahasiswaService,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit() {
    this.mahasiswaForm = this.fb.group({
      nim: [''],
      name: [''],
      jurusan: [''],
    });
  }
  formSubmit() {
    if (!this.mahasiswaForm.valid) {
      return false;
    } else {
      return this.aptService
        .createMahasiswa(this.mahasiswaForm.value)
        .then((res) => {
          console.log(res);
          this.mahasiswaForm.reset();
          this.router.navigate(['/home']);
        })
        .catch((error) => console.log(error));
    }
  }
}
