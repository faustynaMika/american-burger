import { Component } from '@angular/core';

 interface DateItem {
   day:string;
   time:string;
 }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  day: DateItem[] = [
    {
      day:'Poniedziałek',
      time:'9 - 17'
    },
    {
      day:'Wtorek',
      time:'9 - 17'
    },
    {
      day:'Środa',
      time:'9 - 17'
    },
    {
      day:'Czwartek',
      time:'9 - 17'
    },
    {
      day:'Piątek',
      time:'9 - 17'
    },
    {
      day:'Sobota',
      time:'9 - 14'
    },
    {
      day:'Niedziela',
      time:'nieczynne'
    },
  ]
}
