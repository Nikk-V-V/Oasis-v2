import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {window} from "rxjs";

@Component({
  selector: 'app-shares-window',
  templateUrl: './shares-window.component.html',
  styleUrls: ['./shares-window.component.scss']
})
export class SharesWindowComponent implements OnInit {

  link: string;

  constructor(
    public dialogRef: MatDialogRef<SharesWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  telegram(): void {
    console.log(document.location.host)
    // document.location.href = `https://t.me/share/url?url=${document.location.host}&text=Оазис`
  }

  facebook(): void {
  }

  copyLink(): void {

  }
}
