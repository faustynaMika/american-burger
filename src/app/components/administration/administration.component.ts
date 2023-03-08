import {Component, OnInit} from '@angular/core';
import {CalendarEvent} from "angular-calendar";
import {MonthViewDay} from "calendar-utils";
import {DailyRecipesService} from "../../shared/services/daily-recipes.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  events: CalendarEvent[] = [];

  selectedDate: Date = new Date();

  constructor(private dailyRecipeService: DailyRecipesService) {
  }

  onDayClick(date: { day: MonthViewDay }) {
    this.selectedDate = date.day.date;
  }

  ngOnInit(): void {
    this.dailyRecipeService.findAll().subscribe(recipes => {
      this.events = []
      recipes.forEach(recipe => {
          this.events = [
            ...this.events,
            {
              start: recipe.date.toDate(),
              title: recipe.name
            },
          ]
        }
      )
    })
  }
}
