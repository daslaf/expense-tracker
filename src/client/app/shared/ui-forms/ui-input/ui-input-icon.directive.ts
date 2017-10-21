import { Directive, Input } from "@angular/core";

@Directive({
  selector: 'ui-input-icon',
  host: {
    'class': 'ui-input-icon',
    '[class.ui-left]': 'align == "left"'
  }
})
export class UiInputIconDirective {
  @Input() align: 'left' | 'right' = 'right';
}