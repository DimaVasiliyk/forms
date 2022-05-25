import { Component, ElementRef, forwardRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, RadioControlValueAccessor } from '@angular/forms';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioComponent),
        multi: true,
    },
],
})

export class RadioComponent extends RadioControlValueAccessor {
  value:any;

  onChange: (...args: any[]) => void = () => {};

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
