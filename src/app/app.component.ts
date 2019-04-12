import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  favorito: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hidrogeno', weight: 1.0079, symbol: 'H', favorito: 'Favorito'},
  {position: 2, name: 'Helio', weight: 4.0026, symbol: 'He', favorito: 'Favorito'},
  {position: 3, name: 'Litio', weight: 6.941, symbol: 'Li', favorito: 'Favorito'},
  {position: 4, name: 'Berilio', weight: 9.0122, symbol: 'Be', favorito: 'Favorito'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', favorito: 'Favorito'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', favorito: 'Favorito'},
  {position: 7, name: 'Nitrogeno', weight: 14.0067, symbol: 'N', favorito: 'Favorito'},
  {position: 8, name: 'Oxigeno', weight: 15.9994, symbol: 'O', favorito: 'Favorito'},
  {position: 9, name: 'Fluor', weight: 18.9984, symbol: 'F', favorito: 'Favorito'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', favorito: 'Favorito'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name: string;
  weight: number;
  symbol: string;
  favorito: string;

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'favorito'];
  dataSource = ELEMENT_DATA;

  openDialog(): void {
     const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: {
        name: this.name,
        symbol: this.symbol,
        weight: this.weight,
        favorito: this.favorito
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.favorito   = result;
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