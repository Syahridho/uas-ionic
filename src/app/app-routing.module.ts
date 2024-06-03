import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'make-appointment',
    loadChildren: () =>
      import('./make-appointment/make-appointment.module').then(
        (m) => m.MakeAppointmentPageModule
      ),
  },
  {
    path: 'edit-appointment/:id',
    loadChildren: () =>
      import('./edit-appointment/edit-appointment.module').then(
        (m) => m.EditAppointmentPageModule
      ),
  },
  {
    path: 'make-mahasiswa',
    loadChildren: () =>
      import('./pages/mahasiswa/make-mahasiswa/make-mahasiswa.module').then(
        (m) => m.MakeMahasiswaPageModule
      ),
  },
  {
    path: 'edit-mahasiswa/:id',
    loadChildren: () =>
      import('./pages/mahasiswa/edit-mahasiswa/edit-mahasiswa.module').then(
        (m) => m.EditMahasiswaPageModule
      ),
  },
  {
    path: 'list-mahasiswa',
    loadChildren: () =>
      import('./pages/mahasiswa/list-mahasiswa/list-mahasiswa.module').then(
        (m) => m.ListMahasiswaPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/auth/signup/signup.module').then(
        (m) => m.SignupPageModule
      ),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/auth/landing/landing.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/auth/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: 'make-dosen',
    loadChildren: () =>
      import('./pages/dosen/make-dosen/make-dosen.module').then(
        (m) => m.MakeDosenPageModule
      ),
  },
  {
    path: 'list-dosen',
    loadChildren: () =>
      import('./pages/dosen/list-dosen/list-dosen.module').then(
        (m) => m.ListDosenPageModule
      ),
  },
  {
    path: 'edit-dosen/:id',
    loadChildren: () =>
      import('./pages/dosen/edit-dosen/edit-dosen.module').then(
        (m) => m.EditDosenPageModule
      ),
  },
  {
    path: 'make-matkul',
    loadChildren: () =>
      import('./pages/matkul/make-matkul/make-matkul.module').then(
        (m) => m.MakeMatkulPageModule
      ),
  },
  {
    path: 'list-matkul',
    loadChildren: () =>
      import('./pages/matkul/list-matkul/list-matkul.module').then(
        (m) => m.ListMatkulPageModule
      ),
  },
  {
    path: 'edit-matkul/:id',
    loadChildren: () =>
      import('./pages/matkul/edit-matkul/edit-matkul.module').then(
        (m) => m.EditMatkulPageModule
      ),
  },
  {
    path: 'make-krs',
    loadChildren: () =>
      import('./pages/krs/make-krs/make-krs.module').then(
        (m) => m.MakeKrsPageModule
      ),
  },
  {
    path: 'list-krs',
    loadChildren: () =>
      import('./pages/krs/list-krs/list-krs.module').then(
        (m) => m.ListKrsPageModule
      ),
  },
  {
    path: 'edit-krs/:id',
    loadChildren: () =>
      import('./pages/krs/edit-krs/edit-krs.module').then(
        (m) => m.EditKrsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
