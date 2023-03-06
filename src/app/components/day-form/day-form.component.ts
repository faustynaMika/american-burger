import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DailyRecipesService} from 'src/app/shared/services/daily-recipes.service';
import {ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-day-form',
  templateUrl: './day-form.component.html',
  styleUrls: ['./day-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class DayFormComponent implements OnChanges, OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  @Input()
  date: Date = new Date();

  prepareForm: FormGroup = new FormGroup(
    {
      inputs: new FormArray([this.defaultInput]),
    }
  )

  constructor(private dailyRecipesService: DailyRecipesService, private _snackBar: MatSnackBar) {
  }

  get defaultInput(): FormGroup {
    return new FormGroup({
        description: new FormControl(''),
      }
    );
  }

  get inputs(): FormArray {
    return this.prepareForm.get('inputs') as FormArray;
  }

  resetForm() {
    this.prepareForm.reset()
    this._snackBar.open('ZAPISANO PRZEPIS', 'X',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });

  }
  ngOnInit():void {
  }

  addInput() {
    this.inputs.push(new FormGroup({
      description: new FormControl(''),
    }))
  }

  deleteInputs(index: number) {
    this.inputs.removeAt(index);
  }

  addDailyRecipe() {
    console.log(this.inputs.value);
    this.dailyRecipesService.updateByDate(this.date, this.inputs.value)
    this.resetForm();
  }


  ngOnChanges(changes: SimpleChanges): void {
    let date = this.dailyRecipesService.findOneByDate(this.date).subscribe(data => data.forEach(el => console.log(el.data())));
    console.log(date)
  }
}
