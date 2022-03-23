import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { SignupContainerComponent } from './signup-container.component';

@NgModule({
  declarations: [SignupComponent, SignupContainerComponent],
  imports: [CommonModule, SignupRoutingModule],
  exports: [SignupComponent, SignupContainerComponent],
})
export class SignupModule {}
