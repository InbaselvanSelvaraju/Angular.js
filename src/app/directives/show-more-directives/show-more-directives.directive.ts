import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowMoreDirectives]'
})
export class ShowMoreDirectivesDirective {
    @Input()
   set appShowMoreDirectives(condition:boolean){
    if(condition){
       this.vcRef.createEmbeddedView(this.templateRef); 
    }else{
      this.vcRef.clear();
    }
   }

  constructor(private templateRef: TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
