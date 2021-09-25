import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {window} from "rxjs";

@Component({
  selector: 'app-shares-window',
  templateUrl: './shares-window.component.html',
  styleUrls: ['./shares-window.component.scss']
})
export class SharesWindowComponent implements OnInit {

  link: string = '';

  constructor(
    public dialogRef: MatDialogRef<SharesWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, image: string, id: string, type: string}
  ) {
    this.link = `https://${document.location.host}/${data.type}/${data.id}`
  }

  ngOnInit(): void {
  }

  telegram(): void {
    document.location.href = `https://t.me/share/url?url=${document.location.host}&text=${this.data.title}`
  }

  facebook(): void {
    document.location.href = `https://www.facebook.com/sharer.php?u=${document.location.host}&text=${this.data.title}&i=${this.data.image}`
  }

  copyLink(input: HTMLInputElement): void {
    input.focus()
    input.select()
  }
}
