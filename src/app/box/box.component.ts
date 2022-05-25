import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BoxComponent),
      multi: true
    }
  ],
  host: {
    '(change)': 'onChange($event.target.value)'
 }
})

export class BoxComponent implements ControlValueAccessor {
  @Input() value: any
  constructor() { }

  onChange: () => void = () => {};

  onTouched: any = () => {};

  registerOnChange(fn: any) {
   this.onChange = fn;
   console.log(fn);
   
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this.value = value;
    console.log(value);
  }

}
