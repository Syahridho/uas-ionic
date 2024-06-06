import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AutheticationService,
    private loadingController: LoadingController,
    public formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
          Validators.required,
        ],
      ],
    });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    if (this.loginForm?.valid) {
      try {
        const user = await this.authService.loginUser(
          this.loginForm.value.email,
          this.loginForm.value.password
        );

        if (user) {
          this.router.navigate(['/home']);
        } else {
          this.presentToast('Login failed');
        }
      } catch (err) {
        this.presentToast(err);
        console.log(err);
      } finally {
        loading.dismiss();
      }
    } else {
      loading.dismiss();
      console.log('Please provide all the required values!');
    }
  }

  async presentToast(message: any) {
    console.log(message);

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
