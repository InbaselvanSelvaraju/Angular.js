import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [MoviecardComponent, LoaderComponent],
  exports: [MoviecardComponent, LoaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
