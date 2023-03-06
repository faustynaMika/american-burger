import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DailyRecipe, DailyRecipesService} from 'src/app/shared/services/daily-recipes.service';

@Component({
  selector: 'app-daily-recipes',
  templateUrl: './daily-recipes.component.html',
  styleUrls: ['./daily-recipes.component.css']
})
export class DailyRecipesComponent implements OnInit {

  recipes$: Observable<DailyRecipe[]>;

  constructor(private dailyRecipesService: DailyRecipesService) {
  }

  ngOnInit(): void {
    this.recipes$ = this.dailyRecipesService.findAll()
  }

}
