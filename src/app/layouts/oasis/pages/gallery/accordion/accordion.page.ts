import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss']
})
export class AccordionPage implements OnInit {

  items = [
    {
      id: 1,
      src: 'assets/images/love.jpg',
      active: false,
      text: '«Я полюбив тебе відвічною любов\'ю, тим і зберіг для тебе мою ласку.» - говорить Господь. (Єр 31, 3).'
    },
    {
      id: 2,
      src: 'assets/images/belief.jpg',
      active: false,
      text: 'От, стою при дверях і стукаю: як хто почує голос мій і відчинить двері, увійду до нього і вечерятиму з ним і він зо мною (Од 3, 20).'
    },
    {
      id: 3,
      src: 'assets/images/sin.jpg',
      active: true,
      text: 'Істинно, істинно кажу вам: Кожен, хто гріх чинить - гріха невольник! (Йо 8, 34)'
    },
    {
      id: 4,
      src: 'assets/images/holy-spirit.jpg',
      active: false,
      text: 'Любов, радість, мир, терпеливість, доброту, милосердя, вірність, лагідність і здержливість (Гал. 5: 22-23).'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeActive(id: number): void {
    console.log(id);
    this.items = this.items
      .map((item) => {
        item.active = false;
        return item;
      })
      .map((item) => {
          item.id === id ? item.active = true : item;
          return item;
      });
  }
}
