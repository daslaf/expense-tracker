import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[uiInput]",
  host: {
    class: "ui-input",
    "[class.ui-empty]": "empty",
    "(input)": "_onInput()",
    "(focus)": "_onFocus()",
    "(blur)": "_onBlur()"
  }
})
export class UiInputDirective {
  focused: boolean = false;

  constructor(private _element: ElementRef) {}

  /** The input element's value. */
  get value() {
    return this._element.nativeElement.value;
  }
  set value(value: string) {
    this._element.nativeElement.value = value;
  }

  get empty() {
    return this.value == null || this.value === "";
  }
  /** NO borrar esta función (aunque no haga "nada") */
  _onInput() {}

  _onFocus() {
    this.focused = true;
  }
  _onBlur() {
    this.focused = false;
  }
}
