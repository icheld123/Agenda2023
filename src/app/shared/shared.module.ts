
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
