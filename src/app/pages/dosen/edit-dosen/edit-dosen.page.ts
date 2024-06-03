import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DosenService } from './../../../shared/dosen/dosen.service';

@Component({
  selector: 'app-edit-dosen',
  templateUrl: './edit-dosen.page.html',
  styleUrls: ['./edit-dosen.page.scss'],
})
export class EditDosenPage implements OnInit {
  updateDosenForm: FormGroup;
  id: string;

  constructor(
    private aptService: DosenService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.updateDosenForm = this.fb.group({
      nid: ['', Validators.required],
      name: ['', Validators.required],
    });

    this.aptService
      .getDosen(this.id)
      .valueChanges()
      .subscribe((res) => {
        if (res) {
          this.updateDosenForm.setValue({
            nid: res.nid || '',
            name: res.name || '',
          });
        }
      });
  }

  updateForm() {
    this.aptService
      .updateDosen(this.id, this.updateDosenForm.value)
      .then(() => {
        this.router.navigate(['/list-dosen']);
      })
      .catch((error) => console.log(error));
  }
}
