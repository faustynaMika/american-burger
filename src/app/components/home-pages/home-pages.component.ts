import {Component} from '@angular/core';

interface HomeInfo {
  title: string;
  description: string;
  imageSrc: string;
}

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {

  mainInfo: HomeInfo = {
    title: 'Pyszne domowe obiady',
    description: 'Smaczne i niedrogie posiłki z kuchni posliej i nie tylko',
    imageSrc: 'assets/images/plate.png'
  }

  infos: HomeInfo[] = [
    {
      title: 'Dostawa do firm',
      description: 'Dostarczamy posiłki do firm, urzędów, sklepów oraz na budowę przy minimalnej kwocie zamówienia 25 zł',
      imageSrc: 'assets/images/hand-holding-food-boxes-picjumbo-com.jpg'
    },
    {
      title: 'Imprezy okolicznościowe',
      description: 'Jesteśmy firmą kateringową, gdzie organizujemy imprezy okolicznościowe chrzciny, komunie itp do 30 osób',
      imageSrc: 'assets/images/pexels-daria-andrievskaya-11066891.jpg'
    },
    {
      title: 'Danie dnia',
      description: 'Codziennie przygotowujemy dla Państwa inne danie w cenie 22 zł',
      imageSrc: 'assets/images/food-from-the-restaurant-in-the-box-picjumbo-com.jpg'
    }
  ];

}
