import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './app-container.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/signup/components/signup/signup.component';
import { SignupModule } from './modules/signup/signup.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    // loadChildren: () =>
    //   import('./modules/signup/signup.module').then((m) => m.SignupModule),
    component: SignupComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
