import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DailyRecipe, DailyRecipesService} from 'src/app/shared/services/daily-recipes.service';
import {ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {first} from "rxjs";

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
export class DayFormComponent implements OnChanges {
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
        id: new FormControl(null),
      }
    );
  }

  get inputs(): FormArray {
    return this.prepareForm.get('inputs') as FormArray;
  }

  resetForm() {
    this.prepareForm.reset()
    this._snackBar.open('ZAPISANO PRZEPIS', 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 50000,
      panelClass: ['snackbar']
    });

  }

  addInput() {
    this.inputs.push(new FormGroup({
      description: new FormControl(''),
      id: new FormControl(null)
    }))
  }

  clearInputs() {
    this.inputs.clear()
  }

  addInputFromRecipe(recipe: DailyRecipe) {
    this.inputs.push(new FormGroup({
      description: new FormControl(recipe.name),
      id: new FormControl(recipe.id),
    }))
  }

  deleteInput(index: number, id?: string) {
    this.inputs.removeAt(index);

    if (id != null) {
      this.dailyRecipesService.deleteById(id)
    }
  }

  addDailyRecipe() {
    this.dailyRecipesService.updateByDate(this.date, this.inputs.value)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.clearInputs();
    this.setInputsByDate()
  }

  private setInputsByDate() {

    console.error("DATA" + this.date)

    this.dailyRecipesService.findAllByDate(this.date)
      .pipe(first())
      .subscribe(data => {
        if (data.length > 0) {
          data.forEach(el => this.addInputFromRecipe(el));
        } else {
          this.addInput()
        }
      });
  }
}
