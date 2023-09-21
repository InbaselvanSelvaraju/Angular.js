// First  Import Component
import { style } from "@angular/animations";
import { Component } from "@angular/core";

// Decrative  component
// @Component({
//    selector: 'app-FirstComponent',
//    //    This is Inline Template. template use to link HTML file and Style  use to link to CSS file
//    template:'<h1 class="head">This is FirstComponent</h1>',
//    styles:['.head{color:red}']
// })
@Component({
   selector: 'app-FirstComponent',
   
   templateUrl:'./firstComponent.component.html',
   
   styleUrls:['./firstComponent.component.css']
})


//  Export ng class
export class FirstComponent {
    
}

