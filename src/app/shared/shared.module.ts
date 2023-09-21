import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviecardComponent } from './moviecard/moviecard.component';



@NgModule({
  declarations: [
              
  
    MoviecardComponent
  ],
  exports:[MoviecardComponent] ,
  imports: [CommonModule],
})
export class SharedModule {}
