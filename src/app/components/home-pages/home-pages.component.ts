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
    title: 'POŁĄCZENIA SMAKÓW, ŻE ŚLINKA CIEKNIE!',
    description: 'KOCHAMY ZARÓWNO KLASYKĘ, JAK I NIECODZIENNE KOMBINACJE SMAKÓW. TŁUSTO I WYTRAWNIE? CZY SŁODKO I SŁONO? SPRAWDŹ, KTÓRA Z NASZYCH PROPOZYCJI NAJLEPIEJ TRAFIA W TWÓJ GUST.',
    imageSrc: 'assets/images/Hamburger-bro.svg'
  }

  infos: HomeInfo[] = [
    {
      title: 'GreenLady',
      description: 'Naszym znakiem rozpoznawczym jest królowa amerykańskich potraw - GreenLady. To dzięki niej nasze lokal ma niepowtarzalny sznyt, a nazwy pizz zostały zaczerpnięte z epoki, w której była produkowana.',
      imageSrc: 'assets/images/Pizza sharing-bro.svg '
    },
    {
      title: 'DODATKI I SAŁATKI',
      description: 'JAK MAWIAJĄ BURGER BEZ FRYTEK TO JAK DOM BEZ DRZWI. SPRAWDŹ NA JAKIE DRZWI MASZ DZISIAJ OCHOTĘ!',
      imageSrc: 'assets/images/Deconstructed food-bro.svg'
    },
    {
      title: 'DOSKONAŁY SMAK TO SUMA DOSKONAŁYCH SKŁAD﻿NIKÓW',
      description: 'JEŻELI CHODZI O SKŁADNIKI NASZYCH DAŃ, TO Z WIEKIEM ROBIMY SIĘ CORAZ BARDZIEJ ORTODOKSYJNI I RYGORYSTYCZNI. JEST DLA NAS WAŻNE, ABY NASZE DANIA BYŁY PRZYGOTOWYWANE Z JAK NAJBARDZIEJ NATURALNYCH I NIEPRZETWORZONYCH SUROWCÓW.',
      imageSrc: 'assets/images/Hamburger-cuate.svg'
    }
  ];

}
