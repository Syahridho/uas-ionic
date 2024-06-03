import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './../shared/appointment.service';
import { AutheticationService } from 'src/app/authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email: any;
  user: any;
  Bookings: any = [];

  constructor(
    private aptService: AppointmentService,
    private authService: AutheticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService
      .getProfile()
      .then((user) => {
        this.email = user?.email;
        console.log('User email:', this.email);
      })
      .catch((error) => {
        console.error('Error getting user profile:', error);
      });

    // Uncomment and implement fetchBookings if needed
    // this.fetchBookings();
    // let bookingRes = this.aptService.getBookingList();
    // bookingRes.snapshotChanges().subscribe((res) => {
    //   this.Bookings = [];
    //   res.forEach((item) => {
    //     let a: any = item.payload.toJSON();
    //     a['$key'] = item.key;
    //     this.Bookings.push(a as Appointment);
    //   });
    // });
  }

  // fetchBookings() {
  //   this.aptService
  //     .getBookingList()
  //     .valueChanges()
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }

  // deleteBooking(id: any) {
  //   console.log(id);
  //   if (window.confirm('Do you really want to delete?')) {
  //     this.aptService.deleteBooking(id);
  //   }
  // }

  signOut() {
    this.authService
      .signOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  }
}
