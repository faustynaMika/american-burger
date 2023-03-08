import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore/collection/collection";
import {Timestamp} from 'firebase/firestore';
import moment from "moment";

export class DailyRecipe {
  id?: string
  date: Timestamp;
  name: string;

  constructor(date: Date, name: string) {
    this.date = Timestamp.fromDate(date);
    this.name = name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DailyRecipesService {
  private dailyRecipesRef: AngularFirestoreCollection<DailyRecipe>;

  constructor(private db: AngularFirestore) {
    this.dailyRecipesRef = this.db.collection('dailyRecipes', ref => ref.orderBy('date', 'desc'));
  }

  private static getCurrentWeekDays(): Date[] {
    let startOfWeek = moment().startOf('isoWeek');
    let endOfWeek = moment().endOf('isoWeek').weekday(0);

    let days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {

      if (day.day() === 0 || day.day() === 6) {
        break;
      }

      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }
    return days;
  }

  findAll() {
    return this.dailyRecipesRef.valueChanges();
  }

  findAllByDate(date: Date) {
    return this.db.collection<DailyRecipe>('dailyRecipes', ref => ref.where('date', '==', date)).valueChanges({idField: 'id'});
  }

  updateByDate(date: Date, description: { description: string, id: string }[]) {
    description.forEach(value => {
      let id = value.id ? value.id : this.db.createId()
      return this.dailyRecipesRef.doc(id).set({
        date: Timestamp.fromDate(date),
        name: value.description
      })
    })
  }

  getRecipesForCurrentWeek() {
    let currentWeekDays = DailyRecipesService.getCurrentWeekDays()

    return this.db.collection<DailyRecipe>('dailyRecipes', ref => ref.where('date', 'in', currentWeekDays)).valueChanges();
  }

  deleteById(id: string) {
    this.dailyRecipesRef.doc(id).delete()
  }
}
