import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberComponent),
      multi: true
    }
  ],
  host: {
    '(change)': 'onChange($event.target.value)'
 }
})
export class NumberComponent implements ControlValueAccessor {
  @Input() value: any
  constructor() { }

  onChange: () => void = () => {};

  onTouched: any = () => {
  };

  registerOnChange(fn: any) {
   this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this.value = value;
  }

}
