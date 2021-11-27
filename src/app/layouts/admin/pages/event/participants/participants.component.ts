import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Participants} from '../../../../../shared/classes/event';
import {EventService} from '../../../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ParticipantsDatasource} from './participants.datasource';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Participants>;

  dataSource: ParticipantsDatasource;

  participantFullName = '';

  displayedColumns = [
    'name', 'surname', 'age', 'sex', 'city', 'level', 'iBelong', 'phone', 'star'
  ];

  sub: any;

  participants: Participants[] | any = [];
  eventId: string | any;

  uid = JSON.parse(localStorage.getItem('uid') as string);

  searchResult: Participants[] = [];

  constructor(
    private router: ActivatedRoute,
    private storage: AngularFireStorage,
    private eventService: EventService,
    private dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {

  }

  async ngAfterViewInit(): Promise<void> {
    await this.init();
  }

  async init(): Promise<void> {
    this.router.params.subscribe(res => this.eventId = res.id);
    this.sub = this.eventService.getParticipants(this.eventId).subscribe(res => {
      this.dataSource = new ParticipantsDatasource();
      this.participants = res;
      this.dataSource.participants = this.participants;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.search = this.search;
      this.table.dataSource = this.dataSource;
    });
  }

  viewFullInfo(participant: any): void {
    // this.dialog.open(ParticipantsInfoComponent, {
    //   data: {
    //     participant
    //   }
    // });
  }

  remove(id: string): void {
    this.eventService.removeParticipants(id);
  }

  search(): void {
  }
}
