import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { element } from 'protractor';

export interface AppData {
  animal: 'panda' | 'unicornio' | 'lion';
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fav: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hidrogeno', weight: 1.0079, symbol: 'H', fav: 'Favorito'},
  {position: 2, name: 'Helio', weight: 4.0026, symbol: 'He', fav: 'Favorito'},
  {position: 3, name: 'Litio', weight: 6.941, symbol: 'Li', fav: 'Favorito'},
  {position: 4, name: 'Berilio', weight: 9.0122, symbol: 'Be', fav: 'Favorito'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', fav: 'Favorito'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', fav: 'Favorito'},
  {position: 7, name: 'Nitrogeno', weight: 14.0067, symbol: 'N', fav: 'Favorito'},
  {position: 8, name: 'Oxigeno', weight: 15.9994, symbol: 'O', fav: 'Favorito'},
  {position: 9, name: 'Fluor', weight: 18.9984, symbol: 'F', fav: 'Favorito'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', fav: 'Favorito'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'fav'];
  dataSource = ELEMENT_DATA;

  openDialog() {
     this.dialog.open(DialogDataExampleDialog, {
      data: {
        name: 'Hidrogeno',
        weight: '1.0079',
        symbol: 'H'
      }
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {}
}