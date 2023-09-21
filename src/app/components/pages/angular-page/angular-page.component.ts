import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-page',
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.css']
})
export class AngularPageComponent {
  // This is String Interpolation
  WelcomeMessage:string = 'Welcome to Angular World'
  user = {
    firstname:"Inbaselvan",
    lastname:"Selvaraj"
  }
  // This is Property Binding . Property Binding datas get from type script to HTML

   

  PropertyBinding ='<h1>Property Binding</h1>'
  PropertyDiscription =
  'Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.'

  DisabaledButton = false

  btnclass = ''

  styles = "2px solid red"
  
  constructor () {
    //  setInterval(() => {
    //   this.DisabaledButton = !this.DisabaledButton
    //   this.btnclass = this.DisabaledButton ?'btn-primary': 'btn-secondary'
    //  },3000)
  }

  // Event Binding. Event Binding datas get from UI to HTML

  InputValue = ""
  getInputValue(event:Event) {
    this.InputValue = (<HTMLInputElement>event.target).value
    console.log(this.InputValue)

    // TWO WAY BINDING . first add FormsModule in  appModule .ts . 
    // get values from input and as well as ialso input event also binding 
  }
  // basicDiretives 

  show = false

  showfun(event:Event){
    this.show = ! this.show
    console.log(this.show)
  }

                                        

names = ["inbaa","abi","subash","vinith","vicky"]
 
}
