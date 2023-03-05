import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
export interface Category {
  name: string;
  id: string;
}

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedCategory: string;
  categories$: Observable<Category[]>;

  constructor(private db: AngularFirestore) {
  };

  ngOnInit(): void {
    let categoriesFirebaseCollection = this.db.collection<Category>('categories');
    let categories = categoriesFirebaseCollection.valueChanges({idField: 'id'});
    this.categories$ = categories

    categories.subscribe(categories => {
      this.selectCategory(categories[0].id)
    })

  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
