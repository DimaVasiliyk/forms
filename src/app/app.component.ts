import { Component, Input, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as questions from "./questions.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';
  @Input() questionsTest:any;
  @Input() templateRef!:TemplateRef<any>;
  public form: FormGroup;
  public radio!:number

    constructor(private fb: FormBuilder) {     
        this.form = this.fb.group({});

  }

    public parse(questions: any) {  
      for (let i = 0; i < questions.patientQuestions.length; i++) {
        const element = questions.patientQuestions[i];
        this.form.addControl(element.formControlName, new FormControl(''));
        if(element.childItems){
          this.formControl(element)
        }
      } 
  }

  public formControl(element: any) {
    for (let i = 0; i < element.childItems.length; i++) {
      const form = element.childItems[i];
      this.form.addControl(form.formControlName, new FormControl(''));
      if(form.childItems){
        this.formControl(form)
      }
    } 
}
  
  questions:any

  ngOnInit() {
    this.form.valueChanges.subscribe(value => console.log);
    this.questions = questions
    this.parse(this.questions)
  }

  send(){
    console.log(this.form.get('age')?.value);
    console.log(this.form.get('check')?.value);
    console.log(this.form.get('medication')?.value);
    console.log(this.form.get('numberPills')?.value);
    console.log(this.form.get('checkWater')?.value);
    console.log(this.form.get('checkGlass')?.value);
  }
}
 