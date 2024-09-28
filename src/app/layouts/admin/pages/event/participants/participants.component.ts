import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Participants} from '../../../../../shared/classes/event';
import {EventService} from '../../../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ParticipantsDatasource} from './participants.datasource';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {MatDialog} from '@angular/material/dialog';
import {InfoComponent} from './info/info.component';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: ActivatedRoute,
    private storage: AngularFireStorage,
    private eventService: EventService,
    private dialog: MatDialog
  ) {}


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Participants>;

  dataSource: ParticipantsDatasource;

  participantFullName = '';

  displayedColumns = [
    'name', 'surname', 'age', 'sex', 'city', 'level', 'iBelong', 'phone', 'star'
  ];

  participants: Participants[] = [];

  eventId: string;

  uid = JSON.parse(localStorage.getItem('uid') as string);

  form: UntypedFormGroup;

  searchResult: Participants[] = [];

  type: string;

  ngOnInit(): void {
    this.type = window.location.pathname.split('/')[2];
    this.form = new UntypedFormGroup({
      search: new UntypedFormControl('')
    });
    this.form.get('search').valueChanges.subscribe((change) => {
      const filtered = this.participants.filter(el => (
        el.name.toLocaleLowerCase().includes(change.toLowerCase().trim())
        || el.surname.toLowerCase().includes(change.toLowerCase().trim())
        || `${el.name.toLowerCase()} ${el.surname.toLowerCase()}`.includes(change.toLowerCase().trim())
        || `${el.surname.toLowerCase()} ${el.name.toLowerCase()}`.includes(change.toLowerCase().trim())
      ));
      this.setDataSource(filtered);
    });
  }

  ngAfterViewInit(): void {
    this.init().then();
  }

  async init(): Promise<void> {
    this.router.params.subscribe(res => this.eventId = res.id);
    this.eventService.getParticipants(this.eventId).subscribe(async (res) => {
      this.participants = res;
      this.setDataSource(res);
    });
  }

  setDataSource(participants: Participants[]): void {
    this.dataSource = new ParticipantsDatasource();
    this.dataSource.participants = participants;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  viewFullInfo(participant: Participants): void {
    this.dialog.open(InfoComponent, {
      data: participant
    });
  }

  remove(id: string): void {
    this.eventService.removeParticipants(id);
  }

  exportData() {
    const keys = ['name', 'surname', 'birthday', 'age', 'sex', 'city', 'phone', 'parentPhone', 'email', 'notes', `${this.type === 'jun' ? 'itWasJun' : 'itWasChild'}`];
    const data: string[][] = [
      ['Ім`я', 'Прізвище', 'Дата народження', 'Вік', 'Стать', 'Місто', 'Номер учасника', 'Номер батьків', 'Електронна адреса', 'Нотатки', 'Був(ла) на оазисі?']
    ];
    this.participants.forEach((part) => {
      data.push(keys.map((el) => el === ('itWasJun' || 'itWaChild')
        ? `${part[(el as string)]}` === 'true'  ? 'Так' : 'Ні'
        : part[(el as string)]));
    });
    const csvContent = 'data:text/csv;charset=utf-8,' + data.map(el => el.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }
}
