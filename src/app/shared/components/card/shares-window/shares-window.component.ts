import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-shares-window',
  templateUrl: './shares-window.component.html',
  styleUrls: ['./shares-window.component.scss']
})
export class SharesWindowComponent implements OnInit {

  link = '';

  constructor(
    public dialogRef: MatDialogRef<SharesWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, image: string, id: string, type: string},
    private snackBar: MatSnackBar
  ) {
    this.link = `https://${document.location.host}/${data.type}/${data.id}`;
  }

  ngOnInit(): void {
  }

  telegram(): void {
    document.location.href = `https://t.me/share/url?url=${document.location.host}&text=${this.data.title}`;
  }

  facebook(): void {
    document.location.href = `https://www.facebook.com/sharer.php?u=${document.location.host}&text=${this.data.title}&image=${this.data.image}`;
  }

  copyLink(input: HTMLInputElement): void {
    input.focus();
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value).then();
    this.snackBar.open('Посилання скопійовано', 'Ок');
  }
}
