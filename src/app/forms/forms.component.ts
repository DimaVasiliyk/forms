import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as questions from "./questions.json";

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})


export class FormsComponent implements OnInit {

  public form: FormGroup;
  public radio!:number

  constructor(private fb: FormBuilder) {     
      this.form = this.fb.group({
      age: new FormControl('',),
      check: new FormControl('',),
      medication: new FormControl('',),
      numberPills: new FormControl('',),
      checkWater: new FormControl('',),
      checkGlass: new FormControl('',),
  });

}
  questions:any
  ngOnInit() {
     this.questions = questions
  }
}
