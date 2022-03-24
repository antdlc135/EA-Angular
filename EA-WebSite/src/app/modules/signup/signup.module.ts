import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup.routing.module';

import { SignupContainerComponent } from './signup-container.component';

@NgModule({
  declarations: [SignupContainerComponent],
  imports: [SignupRoutingModule, CommonModule],
})
export class SignupModule {}
