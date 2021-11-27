import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OasisLayout} from './oasis.layout';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CongratsComponent} from './components/congrats/congrats.component';


let routes: Routes;
routes = [
  {
    path: '', component: OasisLayout, children: [
      {path: '', redirectTo: '/preview', pathMatch: 'full'},
      {
        path: 'jun/home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {
          animation: 'HomePage',
          fireEventsLink: 'event/jun',
          quote: 'Дорогі юнаки й дівчата, буду радий бачити, як ви біжите вперед швидше від повільних і боязких. Біжіть, приваблені тим дуже любим Обличчям, яке адоруємо в Пресвятій Євхаристії та розпізнаємо в тілі страждаючого брата чи сестри… Церква потребує вашого пориву, вашої чуйності, вашої віри… А коли прибудете туди, куди ми ще не дійшли, наберіться терпеливості, щоб нас дочекатися"(Папа Франциск, Christus Vivit 9,299)',
          listTitle: '',
          listItems: [],
          conclusions: ''
        }
      },
      {
        path: 'child/home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {
          animation: 'HomePage',
          fireEventsLink: 'event/child',
          quote: '',
          listTitle: 'Якщо Ти хочеш:',
          listItems: [
            'навчитися будувати стосунки з Ісусом і розвивати їх;',
            'переживати християнську віру у повсякденному житті;',
            'стати знаряддям в руках Бога і розповідати про Нього іншим;',
            'отримати цікаві та захоплюючі знання;',
            'знайти нових друзів;',
            'провести цікаво, весело і незабутньо час;'
          ],
          conclusions: 'Тоді Тобі до нас! Чекаємо Тебе на Малому Оазис 😄'
        }
      },
      {
        path: 'jun/menu',
        loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule),
        data: {
          animation: 'MenuPage',
          path: '/oasis/jun'
        }
      },
      {
        path: 'child/menu',
        loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule),
        data: {
          animation: 'MenuPage',
          path: '/oasis/child'
        }
      },
      {
        path: 'jun/gallery',
        loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule),
        data: {animation: 'GalleryPage'}
      },
      {
        path: 'child/gallery',
        loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule),
        data: {animation: 'GalleryPage'}
      },
      {
        path: 'jun/event/:id',
        loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule),
        data: {animation: 'EventPage', type: 'jun'}
      },
      {
        path: 'child/event/:id',
        loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule),
        data: {animation: 'EventPage', type: 'child'}
      },
      {
        path: 'jun/contacts',
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
        data: {animation: 'ContactsPage'}
      },
      {
        path: 'child/contacts',
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
        data: {animation: 'ContactsPage'}
      },
      {
        path: 'jun/about',
        loadChildren: () => import('./pages/about-as/about-as.module').then(m => m.AboutAsModule),
        data: {
          animation: 'AboutAsPage',
          historyPart: [
            'ІСТОРІЯ ЗАСНУВАННЯ РУХУ ОАЗИС',
            'assets/images/photo.jpg',
            'Слуга Божий о. Франциск Бляхніцький (1921-1987) народився 24 березня 1921 року в регіоні Сілезія (Польща).' +
            'Будучи молодою людиною, він заявив про відсутність віри. Був активним членом скаутського руху, і цей досвід виявився дуже важливим у його житті.\n' +
            'Його метою було розвинути в собі сильну особистість, і він мав великі плани на побудову нового, великого світу.',
            'Під час війни за підпільну патріотичну діяльність він був арештований і приречений на смертну кару в концтаборі в Аушвіц.',
            'Просидівши 100 днів в очікуванні на неї, він був помилуваний. Там і звершилося його навернення.',
            'Після війни став священиком і розвивав активну релігійно-соціальну діяльність. Між іншим ефективно боровся за тверезість народу через заборонену організацію Круціята Визволення Людини (яка була комплексним синтезом і польською адаптацією католицької теології визволення).',
            'Після знищення КВЛ польською комуністичною владою і сорому ув\'язнення Бляхніцький розпочав працю з дітьми і молоддю.',
            'Спочатку робив це, організовуючи реколекції для міністрантів.',
            'assets/images/photo2.jpg',
            'Він мав особливий дар для роботи з молоддю. Він допоміг їм розвинути стосунки з Богом та заохотив їх працювати над собою. У цей час він почав розробляти новий метод реколекцій для молоді, так звані реколекції за методом досвідчення – пережиття зустрічі, присутності і ведення Богом через живу і послідовну віру. Ці реколекції були засновані не лише на слуханні християнського навчання, але і на досвідченні єдності з Богом та іншими людьми (християнською спільнотою учнів Ісуса). Ентузіазм о. Бляхніцького щодо післясоборного еклезіального i літургійного оновлення, a також щодо екуменічного протестантського євангелізаційно-харизматичного явища породив цілу нову формаційну систему, визнану під назвою: Рух Світло-Життя (Рух Оазису).',
            'О. Бляхніцький помер (скоріш його отруїли агенти комуністичної безпеки) в Німеччині 27 лютого 1987 р. Його останки були перенесені в спеціальну гробницю в церкві в с. Крощенко-над-Дунайцем. Нині триває його беатифікаційний процес. Він є визнаний Слугою Божим.',
          ],
          nowPart: [
            'ОАЗИС СЬОГОДНІ',
            'Тертуліан сказав, що ми не народжуємося християнами, але стаємо християнами. Зерно, яке ми отримуємо в Таїнстві Хрещення, зростає настільки, наскільки ми його обробляємо. Духовна формація повинна спонукати нас до зусиль, щоб виробити правильне ставлення і пропонувати відповідні засоби для цього. Це дозволяє нам гармонійно зростати у святості.',
            'Реколекції Оазису - це допомога у досягненні християнської зрілості. Такі реколекції надають досвідчення християнського життя. Таким чином, Оазис можна назвати досвідними реколекціями, однак ключовим поняттям тут є екзистенціальне, а не емоційне досвідчення. Емоційне досвідчення - лише один із елементів цих реколекцій.',
            'Вони стандартно тривають дванадцять днів (влітку). Одного разу хтось сказав, що Реколекції Оазису - це «церковний рік», вміщений у два тижні, і після таких реколекцій людина ставиться до Церкви абсолютно по-новому. Це правда, що протягом цих двох тижнів є багато молитви. Свята Літургія є центральним пунктом кожного дня. День починається з молитви (часто утрені) і закінчується молитвою (різноманітні вечори), щоб поглибити стосунки з Ісусом, а це вимагає часу та праці.',
            'Також одним з елементів є зустріч в невеликій групі учнів, де діляться своєю вірою та своїми думками. Слід також згадати, що є час, присвячений особистій біблійній медитації (так званий «Намет зустрічі»). Крім того, є також інтелектуальний момент – конференції, які допомагають навчитися чогось нового, роз’яснити та поглибити знання. Все це є для кращого пізнання Ісуса, збільшення віри та розуміння краси Церкви. Вечори - це особливий час для інтеграції та будування стосунків з оточуючими: вогнище, танці, радісні ігри, інтелектуальні дискусії тощо. Ми прагнемо проводити час разом якісно. Це дуже важливо у світі, в якому побудова відносин та зв’язків стає все важчою. Ці зв\'язки можуть розвиватися не тільки під час ігор та відпочинку, але й під час спільної роботи, оскільки лише тоді можна побачити, скільки радості може бути в таких незначних видах діяльності, як миття, прибирання чи чищення картоплі ... Звичайно, крім усього перерахованого, у кожної людини є великий букет талантів. Також частина програми включає творчі майстер-класи, такі як музика, спорт, театр, фотографія, кінематографія, програмування, етикет, кулінарія, мистецтво тощо. Теми, які обговорюємо в конференціях під час Оазису, є різноманітними, зокрема це - Керигма, основи християнського життя, молитва, духовне життя, психологія молодої людини, стосунки з родиною, друзями, ролі в суспільстві, проблеми суспільства, соціологія, антропологія людини, життя в Церкві, місце в Церкві, євангелізація та багато іншого. Все це входить в 4 роки формування.',
          ],
          endPart: [
            'І НА КІНЕЦЬ',
            'Основна суть Оазису полягає не в отриманні богословських знань (знань ніколи не є забагато), але в першу чергу в зустрічі з Живим Богом, розвитку стосунків з Ісусом в динаміці Святого Духа та активному проживанні цієї віри у повсякденному житті.',
            'Прагнемо, щоб наші реколекції Оазису були наче оаза в пустині щоденності – часом як привикання до приязні з Ісусом і життя без гріха в Його благодаті, так і нових стандартів життя дитини Божої.'
          ]
        }
      }, {
        path: 'child/about',
        loadChildren: () => import('./pages/about-as/about-as.module').then(m => m.AboutAsModule),
        data: {
          animation: 'AboutAsPage',
          historyPart: [
            'ІСТОРІЯ ЗАСНУВАННЯ РУХУ ОАЗИС',
            'assets/images/photo.jpg',
            'Слуга Божий о. Франциск Бляхніцький (1921-1987) народився 24 березня 1921 року в регіоні Сілезія (Польща). Будучи молодою людиною, він заявив про відсутність віри. Був активним членом скаутського руху, і цей досвід виявився дуже важливим у його житті. Його метою було розвинути в собі сильну особистість, і він мав великі плани на побудову нового, великого світу.',
            'Під час війни за підпільну патріотичну діяльність він був арештований і приречений на смертну кару в концтаборі в Аушвіц.',
            'Просидівши 100 днів в очікуванні на неї, він був помилуваний. Там і звершилося його навернення.',
            'Після війни став священиком і розвивав активну релігійно-соціальну діяльність. Між іншим ефективно боровся за тверезість народу через заборонену організацію Круціята Визволення Людини (яка була комплексним синтезом і польською адаптацією католицької теології визволення).',
            'Після знищення КВЛ польською комуністичною владою і сорому ув\'язнення Бляхніцький розпочав працю з дітьми і молоддю.',
            'Спочатку робив це, організовуючи реколекції для міністрантів.',
            'assets/images/photo2.jpg',
            'Він мав особливий дар для роботи з молоддю. Він допоміг їм розвинути стосунки з Богом та заохотив їх працювати над собою. У цей час він почав розробляти новий метод реколекцій для молоді, так звані реколекції за методом досвідчення – пережиття зустрічі, присутності і ведення Богом через живу і послідовну віру. Ці реколекції були засновані не лише на слуханні християнського навчання, але і на досвідченні єдності з Богом та іншими людьми (християнською спільнотою учнів Ісуса). Ентузіазм о. Бляхніцького щодо післясоборного еклезіального i літургійного оновлення, a також щодо екуменічного протестантського євангелізаційно-харизматичного явища породив цілу нову формаційну систему, визнану під назвою: Рух Світло-Життя (Рух Оазису).',
            'О. Бляхніцький помер (скоріш його отруїли агенти комуністичної безпеки) в Німеччині 27 лютого 1987 р. Його останки були перенесені в спеціальну гробницю в церкві в с. Крощенко-над-Дунайцем. Нині триває його беатифікаційний процес. Він є визнаний Слугою Божим.',
          ],
          nowPart: [
            'ОАЗИС СЬОГОДНІ',
            'Реколекції Оазису - це допомога у досягненні християнської зрілості. Вони стандартно відбуваються 4 рази в рік, щосезону. Зимою і літом реколекції Оазису тривають 5-7 днів (включаючи приїзд- від’їзд), весною та восени 3-4 дні (включаючи приїзд- від’їзд).  Свята Літургія є центральним пунктом кожного дня. День починається з молитви  і закінчується молитвою , є можливість відвідування каплиці. Також одним з елементів є зустріч в невеликій групі (аніматор та діти), де діляться своєю вірою та своїми думками. Крім того, є також інтелектуальний момент – конференції, які допомагають навчитися чогось нового, роз’яснити та поглибити знання.',
            'Все це є для кращого пізнання Ісуса, збільшення віри та розуміння краси Церкви. Розважальні вечори - це особливий час для інтеграції та будування стосунків з оточуючими: танці, ігри,  інтелектуальні завдання тощо. Ми прагнемо проводити час разом якісно. Це дуже важливо у світі, в якому побудова відносин та зв’язків стає все важчою.',
            'Звичайно, крім усього перерахованого, у кожної дитини є великий букет талантів. Також частина програми включає творчі майстер-класи, такі як музика, спорт, театр, фотографія,  етикет, кулінарія, мистецтво тощо. Теми, які обговорюємо в конференціях під час Оазису, є різноманітними, зокрема це - Керигма, основи християнського життя, молитва, духовне життя, стосунки з родиною, друзями, ролі в суспільстві, проблеми суспільства, соціологія, антропологія людини, життя в Церкві, місце в Церкві, євангелізація та багато іншого. '
          ],
          endPart: [
            'І НА КІНЕЦЬ',
            'Основна суть Оазису полягає не в отриманні богословських знань (знань ніколи не є забагато), але в першу чергу в зустрічі з Живим Богом, розвитку стосунків з Ісусом в динаміці Святого Духа та активному проживанні цієї віри у повсякденному житті.',
            'Прагнемо, щоб наші реколекції Оазису були наче оаза в пустині щоденності – часом як привикання до приязні з Ісусом і життя без гріха в Його благодаті, так і нових стандартів життя дитини Божої.'
          ]
        }
      },
      {
        path: 'jun/testimony',
        loadChildren: () => import('./pages/testimony/testimony.module').then(m => m.TestimonyModule),
        data: {animation: 'TestimonyPage'}
      },
      {
        path: 'child/testimony',
        loadChildren: () => import('./pages/testimony/testimony.module').then(m => m.TestimonyModule),
        data: {animation: 'TestimonyPage'}
      },
    ]
  },
];

@NgModule({
  declarations: [OasisLayout, CongratsComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class OasisLayoutModule { }
