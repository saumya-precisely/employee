import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
