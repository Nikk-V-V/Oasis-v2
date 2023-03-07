import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Participants} from '../../../../../../shared/classes/event';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  type: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Participants,
  ) {}

  ngOnInit(): void {
    this.type = window.location.pathname.split('/')[2];
  }
}
