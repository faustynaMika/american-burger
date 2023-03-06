import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

export interface MenuItem {
  name: string;
  price: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input()
  public category: string;
  date = new Date().toJSON().slice(0, 10);

  menu$: Observable<MenuItem[]>;

  constructor(private db: AngularFirestore) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.category == null) {
      return;
    }

    let data = this.db.collection('categories').doc(this.category).collection<MenuItem>('menu')
    this.menu$ = data.valueChanges();
  }

  ngOnInit(): void {

  }
}
