import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MahasiswaService } from './../../../shared/mahasiswa/mahasiswa.service';

@Component({
  selector: 'app-edit-mahasiswa',
  templateUrl: './edit-mahasiswa.page.html',
  styleUrls: ['./edit-mahasiswa.page.scss'],
})
export class EditMahasiswaPage implements OnInit {
  updateMahasiswaForm: FormGroup;
  id: string;

  constructor(
    private aptService: MahasiswaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.updateMahasiswaForm = this.fb.group({
      nim: ['', Validators.required],
      name: ['', Validators.required],
      jurusan: ['', Validators.required],
    });

    this.aptService
      .getMahasiswa(this.id)
      .valueChanges()
      .subscribe((res) => {
        if (res) {
          this.updateMahasiswaForm.setValue({
            nim: res.nim || '',
            name: res.name || '',
            jurusan: res.jurusan || '',
          });
        }
      });
  }

  updateForm() {
    this.aptService
      .updateMahasiswa(this.id, this.updateMahasiswaForm.value)
      .then(() => {
        this.router.navigate(['/list-mahasiswa']);
      })
      .catch((error) => console.log(error));
  }
}
