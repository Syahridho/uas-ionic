import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DosenService } from './../../../shared/dosen/dosen.service';
@Component({
  selector: 'app-make-dosen',
  templateUrl: './make-dosen.page.html',
  styleUrls: ['./make-dosen.page.scss'],
})
export class MakeDosenPage implements OnInit {
  dosenForm: FormGroup;
  constructor(
    private aptService: DosenService,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit() {
    this.dosenForm = this.fb.group({
      nid: [''],
      name: [''],
    });
  }
  formSubmit() {
    if (!this.dosenForm.valid) {
      return false;
    } else {
      return this.aptService
        .createDosen(this.dosenForm.value)
        .then((res) => {
          console.log(res);
          this.dosenForm.reset();
          this.router.navigate(['/list-dosen']);
        })
        .catch((error) => console.log(error));
    }
  }
}
