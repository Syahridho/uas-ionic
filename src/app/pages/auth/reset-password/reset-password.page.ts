import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: any;
  constructor(
    public authService: AutheticationService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  async resetPassword() {
    this.authService.resetPassword(this.email).then(() => {
      console.log('sent'); //show confirmation dialog
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your reset password link has been sent on your email',
      duration: 2000, // Duration in milliseconds
      position: 'bottom', // Position of the toast (top, bottom, middle)
    });

    toast.present();
    toast.onDidDismiss().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
