import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
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
    this.dailyRecipesService.getRecipesForCurrentWeek().subscribe(recipes => {console.log(recipes)})

    this.recipes$ = this.dailyRecipesService.getRecipesForCurrentWeek().pipe(map(recipes => recipes.sort(this.sortByDate)))
  }

  sortByDate(first: DailyRecipe, second: DailyRecipe) {
    if (first.date < second.date)
      return -1;
    if (first.date > second.date)
      return 1;
    return 0;
  }

}
