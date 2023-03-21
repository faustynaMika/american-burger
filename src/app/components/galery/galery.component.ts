import { Component } from '@angular/core';

class Photos {
  name: string;
  img: string

  constructor(name: string, img: string) {
    this.name = name;
    this.img = img;
  }
}

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {
photos: Photos[] = [
  {
    name: "Sałatka",
    img: "assets/images/Hamburger-cuate.svg"
  },
  {
    name: "Sałatka",
    img: "assets/images/Hamburger-amico.svg"
  },
  {
    name: "Sałatka",
    img: "assets/images/Hamburger-bro.svg"
  },
  {
    name: "Sałatka",
    img: "assets/images/Pizza sharing-bro.svg"
  },
]
}
