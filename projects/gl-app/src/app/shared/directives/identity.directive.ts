import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

const currentUserRoles = ['user'];

@Directive({
  selector: '[glIdentity]'
})
export class IdentityDirective {
  @Input() set glIdentity(roles: Array<any>) {
    if (this.hasRequiredIdentity(roles)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.rendered = true;
    } else {
      this.viewContainerRef.clear();
      this.rendered = true;
    }
  }

  private rendered = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  private hasRequiredIdentity(roles: Array<any>): boolean {
    return roles.some(r => currentUserRoles.some(c => c === r));
  }

}
