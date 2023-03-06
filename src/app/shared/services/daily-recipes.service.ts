import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore/collection/collection";
import {Timestamp} from 'firebase/firestore';

export class DailyRecipe {
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

  findAll() {
    return this.dailyRecipesRef.valueChanges();
  }

  findOneByDate(date: Date) {
    return this.db.collection<DailyRecipe>('dailyRecipes', ref => ref.where('date', '==', date)).get();
  }

  updateByDate(date: Date, description: { description: string }[]) {
    description.forEach(value => {
      let id = this.db.createId()
      return this.dailyRecipesRef.doc(id).set({
        date: Timestamp.fromDate(date),
        name: value.description
      })
    })
  }

}
