import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-shares-window',
  templateUrl: './shares-window.component.html',
  styleUrls: ['./shares-window.component.scss']
})
export class SharesWindowComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SharesWindowComponent>
  ) { }

  ngOnInit(): void {
  }

}
